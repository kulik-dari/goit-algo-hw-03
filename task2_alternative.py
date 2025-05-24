"""
task2_alternative.py - Альтернативна версія сніжинки Коха без matplotlib

Цей файл створено для випадків, коли matplotlib не можна встановити 
через системні обмеження (як у macOS з externally-managed-environment).

Функціональність:
- Повна реалізація алгоритму сніжинки Коха
- ASCII-візуалізація фракталу
- Текстова візуалізація координат
- Детальний математичний аналіз
- Незалежність від зовнішніх бібліотек
"""

import sys
import math

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

def draw_simple_ascii_fractal(order):
    """
    Створює простий ASCII-арт для візуалізації фракталу.
    
    Args:
        order: рівень рекурсії
    """
    print(f"\nASCII-візуалізація сніжинки Коха (рівень {order}):")
    print("=" * 50)
    
    if order == 0:
        # Простий трикутник
        print("    /\\")
        print("   /  \\")
        print("  /____\\")
    elif order == 1:
        # Трикутник з виступами
        print("     /\\")
        print("    /  \\")
        print("   /\\  /\\")
        print("  /  \\/  \\")
        print(" /        \\")
        print("/___/\\  /\\___\\")
        print("    \\__/")
    else:
        # Складний фрактал - схематично
        print("Складна фрактальна структура:")
        print("       /\\/\\")
        print("      /    \\")
        print("     /\\    /\\")
        print("    /  \\  /  \\")
        print("   /\\  /\\/\\  /\\")
        print("  /__\\/____\\/__\\")
        print(" /              \\")
        print("/___/\\/\\__/\\/\\___\\")
        print("     \\__/  \\__/")
        print()
        print(f"Примітка: Для точної візуалізації рівня {order}")
        print("потрібна графічна бібліотека matplotlib")

def create_text_visualization(points, width=80, height=40):
    """
    Створює текстову візуалізацію фракталу в ASCII.
    
    Args:
        points: список точок фракталу
        width: ширина текстового поля
        height: висота текстового поля
    """
    if not points:
        return
    
    # Знаходимо межі фракталу
    x_coords = [p[0] for p in points]
    y_coords = [p[1] for p in points]
    
    min_x, max_x = min(x_coords), max(x_coords)
    min_y, max_y = min(y_coords), max(y_coords)
    
    # Створюємо сітку символів
    grid = [[' ' for _ in range(width)] for _ in range(height)]
    
    # Масштабуємо точки до розміру сітки
    for i in range(len(points) - 1):
        x1, y1 = points[i]
        x2, y2 = points[i + 1]
        
        # Масштабування до сітки
        screen_x1 = int((x1 - min_x) / (max_x - min_x) * (width - 1))
        screen_y1 = int((y1 - min_y) / (max_y - min_y) * (height - 1))
        screen_x2 = int((x2 - min_x) / (max_x - min_x) * (width - 1))
        screen_y2 = int((y2 - min_y) / (max_y - min_y) * (height - 1))
        
        # Малюємо лінію (спрощений алгоритм)
        if abs(screen_x2 - screen_x1) > abs(screen_y2 - screen_y1):
            # Горизонтальна лінія
            if screen_x1 > screen_x2:
                screen_x1, screen_x2 = screen_x2, screen_x1
                screen_y1, screen_y2 = screen_y2, screen_y1
            
            for x in range(screen_x1, screen_x2 + 1):
                if screen_x2 != screen_x1:
                    y = screen_y1 + (screen_y2 - screen_y1) * (x - screen_x1) // (screen_x2 - screen_x1)
                else:
                    y = screen_y1
                
                if 0 <= x < width and 0 <= y < height:
                    grid[height - 1 - y][x] = '*'
        else:
            # Вертикальна лінія
            if screen_y1 > screen_y2:
                screen_x1, screen_x2 = screen_x2, screen_x1
                screen_y1, screen_y2 = screen_y2, screen_y1
            
            for y in range(screen_y1, screen_y2 + 1):
                if screen_y2 != screen_y1:
                    x = screen_x1 + (screen_x2 - screen_x1) * (y - screen_y1) // (screen_y2 - screen_y1)
                else:
                    x = screen_x1
                
                if 0 <= x < width and 0 <= y < height:
                    grid[height - 1 - y][x] = '*'
    
    # Виводимо сітку
    print("\nТекстова візуалізація сніжинки Коха:")
    print("=" * width)
    for row in grid:
        print(''.join(row))
    print("=" * width)

def show_coordinates_sample(points, max_points=20):
    """
    Показує зразок координат точок фракталу.
    
    Args:
        points: список точок
        max_points: максимальна кількість точок для показу
    """
    if not points:
        return
    
    print(f"\nЗразок координат точок (перші {min(max_points, len(points))} з {len(points)}):")
    print("-" * 50)
    
    for i, (x, y) in enumerate(points[:max_points]):
        print(f"Точка {i+1:2d}: ({x:8.4f}, {y:8.4f})")
    
    if len(points) > max_points:
        print(f"... та ще {len(points) - max_points} точок")

def analyze_fractal(order, points):
    """
    Аналізує властивості фракталу.
    
    Args:
        order: рівень рекурсії
        points: список точок фракталу
    """
    print(f"\n" + "="*60)
    print(f"МАТЕМАТИЧНИЙ АНАЛІЗ ФРАКТАЛУ 'СНІЖИНКА КОХА'")
    print("="*60)
    print(f"Рівень рекурсії: {order}")
    
    if points:
        print(f"Кількість згенерованих точок: {len(points)}")
    
    # Теоретичні характеристики
    theoretical_segments = 3 * (4 ** order)
    print(f"Теоретична кількість сегментів: {theoretical_segments}")
    
    if order > 0:
        perimeter_ratio = (4/3) ** order
        print(f"Збільшення периметру: {perimeter_ratio:.4f}x")
        print(f"Приблизний периметр: {perimeter_ratio:.2f} одиниць")
    
    # Площа завжди залишається скінченною
    if order > 0:
        # Формула для площі сніжинки Коха
        area_ratio = 1 + (1/5) * (1 - (4/9)**order) / (1 - 4/9)
        print(f"Збільшення площі: {area_ratio:.4f}x")
    
    print(f"Фрактальна розмірність: ~1.2619 (між лінією та площиною)")
    
    # Алгоритмічна складність
    print(f"\nАлгоритмічна складність:")
    print(f"- Часова складність: O(4^{order}) = O({4**order})")
    print(f"- Просторова складність: O(4^{order})")
    print(f"- Глибина рекурсії: {order}")
    
    # Рекурсивна природа
    print(f"\nРекурсивна структура:")
    print(f"- Кожен сегмент рівня {order-1 if order > 0 else 0} → 4 сегменти рівня {order}")
    print(f"- Довжина кожного нового сегмента: 1/3 від попереднього")
    print(f"- Загальна довжина збільшується в 4/3 рази на кожному рівні")
    
    if order >= 4:
        print(f"\n⚠️  При рівні {order} структура стає дуже складною:")
        print(f"   - {theoretical_segments} сегментів для малювання")
        print(f"   - Периметр у {perimeter_ratio:.1f} разів більший за початковий")

def main():
    """
    Головна функція програми.
    """
    print("🔶" + "="*58 + "🔶")
    print("🔶  ГЕНЕРАТОР ФРАКТАЛУ 'СНІЖИНКА КОХА' (БЕЗ MATPLOTLIB)  🔶")
    print("🔶" + "="*58 + "🔶")
    print("📝 Цей файл створено як альтернатива для систем, де matplotlib")
    print("   не можна встановити через системні обмеження.")
    print("🚀 Повна функціональність БЕЗ зовнішніх залежностей!")
    print("="*62)
    
    # Отримуємо рівень рекурсії від користувача
    if len(sys.argv) > 1:
        try:
            order = int(sys.argv[1])
            if order < 0:
                raise ValueError("Рівень рекурсії повинен бути невід'ємним числом")
        except ValueError as e:
            print(f"❌ Помилка: {e}")
            print("Використання: python3 task2_alternative.py [рівень_рекурсії]")
            return
    else:
        # Запитуємо користувача ввести рівень рекурсії
        try:
            print("Рекомендовані рівні:")
            print("  0-2: швидко, добре видно структуру")
            print("  3-4: середня складність, деталізовано")
            print("  5-6: висока складність, багато деталей")
            order = int(input("\nВведіть рівень рекурсії (0-6): "))
            if order < 0:
                raise ValueError("Рівень рекурсії повинен бути невід'ємним числом")
        except ValueError:
            print("❌ Помилка: Будь ласка, введіть ціле невід'ємне число")
            return
    
    # Попередження для високих рівнів рекурсії
    if order > 6:
        print(f"⚠️  УВАГА! Рівень рекурсії {order} може зайняти багато часу та пам'яті.")
        print(f"   Очікувана кількість сегментів: {3 * (4 ** order):,}")
        response = input("Продовжити? (y/n): ")
        if response.lower() != 'y':
            print("❌ Операцію скасовано")
            return
    
    print(f"\n🔄 Генерую сніжинку Коха з рівнем рекурсії {order}...")
    
    try:
        # Генеруємо точки фракталу
        points = koch_snowflake_points(order, size=6)
        
        # Показуємо простий ASCII-арт
        draw_simple_ascii_fractal(order)
        
        # Створюємо детальнішу візуалізацію для малих рівнів
        if order <= 3 and points:
            create_text_visualization(points, width=60, height=30)
        
        # Показуємо зразок координат
        if points and order <= 4:
            show_coordinates_sample(points)
        
        # Аналізуємо властивості фракталу
        analyze_fractal(order, points)
        
        # Поради щодо візуалізації
        print(f"\n💡 ДОДАТКОВА ІНФОРМАЦІЯ:")
        print(f"📁 Файл task2.py містить версію з matplotlib для кращої візуалізації")
        print(f"🔧 Для встановлення matplotlib на macOS:")
        print(f"   python3 -m venv venv")
        print(f"   source venv/bin/activate")
        print(f"   pip install matplotlib")
        print(f"🎯 Поточна версія надає повний математичний аналіз фракталу")
        
        print(f"\n✅ Генерацію завершено успішно!")
        
    except Exception as e:
        print(f"❌ Помилка під час генерації фракталу: {e}")
        print(f"💡 Спробуйте менший рівень рекурсії")

if __name__ == "__main__":
    main()
