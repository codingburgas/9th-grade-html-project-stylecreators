document.addEventListener('DOMContentLoaded', function() {
    const emergencyButton = document.getElementById('emergencyButton');

    if (emergencyButton) {
        emergencyButton.addEventListener('click', function() {
            alert('Каква е причината да подадете вашият сигнал?');

            let a = prompt(
                'Моля, изберете причина:\n\n' +
                '1. Пожар\n' +
                '2. Надвесени клони\n' +
                '3. Опасни вещества\n\n' +
                'Въведете число от 1 до 3, за да изберете вашият проблем!'
            );

            if (a !== null) {
                const choice = parseInt(a.trim(), 10);

                if (choice === 1) {
                    prompt('Къде се намира пожарът?');
                    alert('Благодарим Ви за отговорността!');
                } else if (choice === 2) {
                    prompt('Къде се намират надвесените клони?');
                    alert('Благодарим Ви за отговорността!');
                } else if (choice === 3) {
                    prompt('Къде се намират опасните вещества?');
                    alert('Благодарим Ви за отговорността!');
                } else {
                    alert('Моля, изберете валидна опция от списъка (число между 1 и 3).');
                }
            } else {
                alert('Сигналът е отменен!');
            }
        });
    } else {
        console.warn("Emergency button with ID 'emergencyButton' not found.");
    }
});