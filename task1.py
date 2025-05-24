import os
import sys
import shutil
from pathlib import Path

def parse_args():
    """
    Функція для парсингу аргументів командного рядка.
    
    Returns:
        tuple: кортеж, що містить шлях до вихідної директорії і шлях до директорії призначення
    """
    # Перевіряємо кількість аргументів
    if len(sys.argv) < 2:
        print("Використання: python3 task1.py <вихідна_директорія> [директорія_призначення]")
        print("Приклад: python3 task1.py /Users/dashakulikova/test_folder dist")
        sys.exit(1)
    
    # Отримуємо шлях до вихідної директорії
    source_dir = sys.argv[1]
    
    # Перевіряємо, чи існує вихідна директорія
    if not os.path.isdir(source_dir):
        print(f"Помилка: '{source_dir}' не є директорією або не існує")
        sys.exit(1)
    
    # Встановлюємо директорію призначення (за замовчуванням "dist")
    if len(sys.argv) >= 3:
        dest_dir = sys.argv[2]
    else:
        dest_dir = "dist"
    
    return source_dir, dest_dir

def create_sorted_copy(file_path, dest_dir):
    """
    Функція для копіювання файлу у відповідну піддиректорію на основі його розширення.
    
    Args:
        file_path (str): шлях до файлу
        dest_dir (str): шлях до директорії призначення
    """
    try:
        # Отримуємо розширення файлу (без крапки)
        file_extension = os.path.splitext(file_path)[1][1:].lower()
        
        # Якщо розширення відсутнє, використовуємо папку "no_extension"
        if not file_extension:
            file_extension = "no_extension"
        
        # Створюємо піддиректорію для цього типу файлів, якщо вона не існує
        extension_dir = os.path.join(dest_dir, file_extension)
        os.makedirs(extension_dir, exist_ok=True)
        
        # Отримуємо ім'я файлу
        file_name = os.path.basename(file_path)
        
        # Повний шлях до файлу призначення
        dest_file_path = os.path.join(extension_dir, file_name)
        
        # Перевіряємо, чи файл з таким ім'ям вже існує
        counter = 1
        original_dest_path = dest_file_path
        while os.path.exists(dest_file_path):
            name, ext = os.path.splitext(original_dest_path)
            dest_file_path = f"{name}_{counter}{ext}"
            counter += 1
        
        # Копіюємо файл
        shutil.copy2(file_path, dest_file_path)
        print(f"Скопійовано: {file_path} -> {dest_file_path}")
        
    except Exception as e:
        print(f"Помилка під час копіювання {file_path}: {str(e)}")

def process_directory(source_dir, dest_dir):
    """
    Рекурсивна функція для обробки директорії та всіх її піддиректорій.
    
    Args:
        source_dir (str): шлях до вихідної директорії
        dest_dir (str): шлях до директорії призначення
    """
    try:
        # Отримуємо список всіх елементів у директорії
        items = os.listdir(source_dir)
        
        for item in items:
            # Пропускаємо приховані файли та системні файли
            if item.startswith('.'):
                continue
                
            # Повний шлях до елементу
            item_path = os.path.join(source_dir, item)
            
            # Перевіряємо, чи є елемент директорією
            if os.path.isdir(item_path):
                # Рекурсивно обробляємо піддиректорію
                print(f"Обробка директорії: {item_path}")
                process_directory(item_path, dest_dir)
            else:
                # Якщо елемент є файлом, копіюємо його
                create_sorted_copy(item_path, dest_dir)
                
    except PermissionError:
        print(f"Помилка доступу до директорії {source_dir}: Недостатньо прав")
    except Exception as e:
        print(f"Помилка під час обробки директорії {source_dir}: {str(e)}")

def main():
    """
    Головна функція програми.
    """
    print("Програма рекурсивного сортування файлів")
    print("======================================")
    
    # Отримуємо шляхи до вихідної директорії та директорії призначення
    source_dir, dest_dir = parse_args()
    
    # Створюємо директорію призначення, якщо вона не існує
    try:
        os.makedirs(dest_dir, exist_ok=True)
        print(f"Директорія призначення: {os.path.abspath(dest_dir)}")
    except Exception as e:
        print(f"Помилка створення директорії призначення: {e}")
        return
    
    print(f"Початок копіювання файлів з '{source_dir}' в '{dest_dir}'...")
    
    # Запускаємо рекурсивну обробку директорії
    process_directory(source_dir, dest_dir)
    
    print(f"\nКопіювання завершено!")
    print(f"Файли відсортовані за розширенням у '{dest_dir}'")
    
    # Виводимо статистику
    try:
        subdirs = [d for d in os.listdir(dest_dir) if os.path.isdir(os.path.join(dest_dir, d))]
        print(f"Створено піддиректорій: {len(subdirs)}")
        for subdir in subdirs:
            subdir_path = os.path.join(dest_dir, subdir)
            file_count = len([f for f in os.listdir(subdir_path) if os.path.isfile(os.path.join(subdir_path, f))])
            print(f"  {subdir}: {file_count} файлів")
    except Exception as e:
        print(f"Помилка при підрахунку статистики: {e}")

if __name__ == "__main__":
    main()
