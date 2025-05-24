import sys
import math

# Перевіряємо наявність matplotlib
try:
    import matplotlib.pyplot as plt
    import matplotlib.patches as patches
    HAS_MATPLOTLIB = True
except ImportError:
    HAS_MATPLOTLIB = False
    print("Увага: matplotlib не встановлено. Використовується альтернативний метод виводу.")
    print("Для встановлення matplotlib виконайте: pip3 install matplotlib")

def koch_snowflake_points(order, size=1.0):
    """
    Генерує точки для побудови сніжинки Коха заданого порядку.
    
    Args:
        order: рівень рекурсії (порядок фракталу)
        size: розмір сторони початкового трикутника
        
    Returns:
        list: список точок (x, y) для малювання сніжинки
    """
    
    def koch_line_points(start, end, order):
        """
        Рекурсивна функція для генерації точок ребра Коха.
        
        Args:
            start: початкова точка (x, y)
            end: кінцева точка (x, y)
            order: рівень рекурсії
            
        Returns:
            list: список точок для ребра Коха
        """
        if order == 0:
            # Базовий випадок: повертаємо пряму лінію
            return [start, end]
        
        # Обчислюємо проміжні точки для ребра Коха
        x1, y1 = start
        x2, y2 = end
        
        # Точка на 1/3 відстані
        p1 = ((2*x1 + x2)/3, (2*y1 + y2)/3)
        
        # Точка на 2/3 відстані  
        p2 = ((x1 + 2*x2)/3, (y1 + 2*y2)/3)
        
        # Вершина трикутника (поворот на 60 градусів)
        dx = p2[0] - p1[0]
        dy = p2[1] - p1[1]
        
        # Поворот на 60 градусів проти годинникової стрілки
        cos60 = math.cos(math.pi/3)
        sin60 = math.sin(math.pi/3)
        
        peak_x = p1[0] + dx * cos60 - dy * sin60
        peak_y = p1[1] + dx * sin60 + dy * cos60
        peak = (peak_x, peak_y)
        
        # Рекурсивно генеруємо чотири сегменти
        points = []
        
        # Перший сегмент: від start до p1
        seg1 = koch_line_points(start, p1, order - 1)
        points.extend(seg1[:-1])  # Виключаємо останню точку, щоб уникнути дублювання
        
        # Другий сегмент: від p1 до peak
        seg2 = koch_line_points(p1, peak, order - 1)
        points.extend(seg2[:-1])
        
        # Третій сегмент: від peak до p2
        seg3 = koch_line_points(peak, p2, order - 1)
        points.extend(seg3[:-1])
        
        # Четвертий сегмент: від p2 до end
        seg4 = koch_line_points(p2, end, order - 1)
        points.extend(seg4)
        
        return points
    
    # Вершини рівностороннього трикутника
    height = size * math.sqrt(3) / 2
    vertices = [
        (-size/2, -height/3),  # Ліва нижня вершина
        (size/2, -height/3),   # Права нижня вершина
        (0, 2*height/3)        # Верхня вершина
    ]
    
    # Генеруємо точки для всіх трьох сторін сніжинки
    all_points = []
    
    for i in range(3):
        start = vertices[i]
        end = vertices[(i + 1) % 3]
        
        # Генеруємо точки для поточної сторони
        side_points = koch_line_points(start, end, order)
        
        # Додаємо точки, виключаючи останню (щоб уникнути дублювання з наступною стороною)
        all_points.extend(side_points[:-1])
    
    # Замикаємо фігуру, додавши першу точку в кінець
    if all_points:
        all_points.append(all_points[0])
    
    return all_points

def draw_koch_snowflake_text(order, size=20):
    """
    Виводить інформацію про сніжинку Коха у текстовому форматі.
    
    Args:
        order: рівень рекурсії (порядок фракталу)
        size: базовий розмір для обчислень
    """
    print(f"\n{'='*50}")
    print(f"СНІЖИНКА КОХА - РІВЕНЬ {order}")
    print(f"{'='*50}")
    
    # Генеруємо точки сніжинки
    points = koch_snowflake_points(order, size)
    
    if not points:
        print("Помилка: не вдалося згенерувати точки для сніжинки")
        return
    
    # Виводимо інформацію про фрактал
    total_points = len(points)
    theoretical_segments = 3 * (4 ** order)
    
    print(f"Кількість точок: {total_points}")
    print(f"Теоретична кількість сегментів: {theoretical_segments}")
    
    if order > 0:
        perimeter_ratio = (4/3) ** order
        print(f"Периметр збільшений у {perimeter_ratio:.2f} разів")
    
    # Простий ASCII-арт для малих рівнів
    if order <= 2:
        print(f"\nПроста візуалізація (рівень {order}):")
        if order == 0:
            print("   /\\")
            print("  /__\\")
        elif order == 1:
            print("     /\\")
            print("   /\\  /\\")
            print("  /____\\")
            print(" /        \\")
            print("/___/\\___\\")
        elif order == 2:
            print("Складна фрактальна структура з багатьма виступами...")
    
    print(f"\nДля повної візуалізації встановіть matplotlib:")
    print(f"pip3 install matplotlib")

def draw_koch_snowflake(order, size=6):
    """
    Малює сніжинку Коха за допомогою matplotlib або текстового виводу.
    
    Args:
        order: рівень рекурсії (порядок фракталу)
        size: розмір фігури
    """
    if not HAS_MATPLOTLIB:
        draw_koch_snowflake_text(order, size)
        return
    
    # Генеруємо точки сніжинки
    points = koch_snowflake_points(order, size)
    
    if not points:
        print("Помилка: не вдалося згенерувати точки для сніжинки")
        return
    
    # Розділяємо координати x та y
    x_coords = [point[0] for point in points]
    y_coords = [point[1] for point in points]
    
    # Створюємо графік
    plt.figure(figsize=(10, 10))
    plt.plot(x_coords, y_coords, 'cyan', linewidth=1.5)
    plt.fill(x_coords, y_coords, 'lightblue', alpha=0.3)
    
    # Налаштовуємо відображення
    plt.title(f'Сніжинка Коха (рівень рекурсії: {order})', fontsize=16, fontweight='bold')
    plt.axis('equal')  # Рівні масштаби по осях
    plt.grid(True, alpha=0.3)
    plt.gca().set_facecolor('black')
    
    # Приховуємо осі для кращого вигляду
    plt.axis('off')
    
    # Показуємо графік
    plt.tight_layout()
    plt.show()
    
    # Виводимо інформацію про фрактал
    total_points = len(points)
    theoretical_segments = 3 * (4 ** order)  # Теоретична кількість сегментів
    
    print(f"\nІнформація про сніжинку Коха:")
    print(f"Рівень рекурсії: {order}")
    print(f"Кількість точок: {total_points}")
    print(f"Теоретична кількість сегментів: {theoretical_segments}")
    
    if order > 0:
        perimeter_ratio = (4/3) ** order
        print(f"Периметр збільшений у {perimeter_ratio:.2f} разів порівняно з початковим трикутником")

def main():
    """
    Головна функція програми.
    """
    print("Генератор фракталу 'Сніжинка Коха'")
    print("==================================")
    
    # Отримуємо рівень рекурсії від користувача
    if len(sys.argv) > 1:
        try:
            order = int(sys.argv[1])
            if order < 0:
                raise ValueError("Рівень рекурсії повинен бути невід'ємним числом")
        except ValueError as e:
            print(f"Помилка: {e}")
            print("Використання: python3 task2.py [рівень_рекурсії]")
            return
    else:
        # Запитуємо користувача ввести рівень рекурсії
        try:
            order = int(input("Введіть рівень рекурсії для сніжинки Коха (рекомендується 0-6): "))
            if order < 0:
                raise ValueError("Рівень рекурсії повинен бути невід'ємним числом")
        except ValueError:
            print("Помилка: Будь ласка, введіть ціле невід'ємне число")
            return
    
    # Попередження для високих рівнів рекурсії
    if order > 6:
        response = input(f"Увага! Рівень рекурсії {order} може зайняти багато часу. Продовжити? (y/n): ")
        if response.lower() != 'y':
            print("Операцію скасовано")
            return
    
    print(f"Генерую сніжинку Коха з рівнем рекурсії {order}...")
    
    try:
        # Малюємо сніжинку
        draw_koch_snowflake(order)
        print("Закрийте вікно з графіком, щоб завершити програму.")
        
    except Exception as e:
        print(f"Помилка під час генерації фракталу: {e}")
        if not HAS_MATPLOTLIB:
            print("Для повної функціональності встановіть matplotlib: pip3 install matplotlib")

if __name__ == "__main__":
    main()
