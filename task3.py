def towers_of_hanoi(n, source="A", auxiliary="B", target="C"):
    """
    Рекурсивна функція для вирішення задачі про Ханойські вежі.
    
    Args:
        n: кількість дисків
        source: початковий стрижень (за замовчуванням "A")
        auxiliary: допоміжний стрижень (за замовчуванням "B")
        target: цільовий стрижень (за замовчуванням "C")
        
    Returns:
        list: список кроків у форматі (звідки, куди, номер_диска)
    """
    # Список для збереження всіх кроків
    steps = []
    
    def _towers_of_hanoi_helper(n, source, auxiliary, target):
        if n == 1:
            # Базовий випадок: переміщуємо 1 диск з джерела на ціль
            steps.append((source, target, 1))
        else:
            # Крок 1: Перемістити n-1 дисків з джерела на допоміжний стрижень
            _towers_of_hanoi_helper(n-1, source, target, auxiliary)
            
            # Крок 2: Перемістити найбільший диск з джерела на цільовий стрижень
            steps.append((source, target, n))
            
            # Крок 3: Перемістити n-1 дисків з допоміжного на цільовий стрижень
            _towers_of_hanoi_helper(n-1, auxiliary, source, target)
    
    # Викликаємо допоміжну функцію
    _towers_of_hanoi_helper(n, source, auxiliary, target)
    
    return steps

def visualize_towers_of_hanoi(n):
    """
    Візуалізує процес вирішення задачі про Ханойські вежі.
    
    Args:
        n: кількість дисків
    """
    # Ініціалізуємо стрижні
    towers = {
        "A": list(range(n, 0, -1)),  # Диски розташовані за зменшенням розміру
        "B": [],
        "C": []
    }
    
    # Виводимо початковий стан
    print(f"Початковий стан: {towers}")
    
    # Отримуємо всі кроки для переміщення дисків
    steps = towers_of_hanoi(n)
    
    # Виконуємо кожен крок і виводимо стан стрижнів після кожного кроку
    for i, (source, target, disk_number) in enumerate(steps, 1):
        # Беремо диск з вихідного стрижня
        towers[target].append(towers[source].pop())
        
        # Виводимо інформацію про переміщення
        print(f"Перемістити диск з {source} на {target}: {towers[target][-1]}")
        print(f"Проміжний стан: {towers}")
    
    # Виводимо кінцевий стан
    print(f"Кінцевий стан: {towers}")

def main():
    """
    Головна функція програми.
    """
    # Запитуємо користувача ввести кількість дисків
    try:
        n = int(input("Введіть кількість дисків (рекомендується 3-7): "))
        if n <= 0:
            raise ValueError("Кількість дисків повинна бути додатним числом")
    except ValueError as e:
        print(f"Помилка: {e}")
        return
    
    # Візуалізуємо процес вирішення
    visualize_towers_of_hanoi(n)
    
    # Виводимо додаткову інформацію
    print(f"\nДля {n} дисків необхідно {2**n - 1} кроків")

if __name__ == "__main__":
    main()
