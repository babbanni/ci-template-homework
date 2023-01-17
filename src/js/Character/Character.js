class Character {
    constructor(name, type, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;

        if (Array.from(name).length > 10 || Array.from(name).length < 2) {
            throw new Error('Имя персонажа не может быть меньше 2 или более 10 символов');
        }

        let types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!types.includes(this.type)) {
            throw new Error('Такого персонажа не существует');
        }
    }

    levelUp() {
        if (this.health >= 0) {
            this.level++;
            this.attack += this.attack / 100 * 20;
            this.defence += this.defence / 100 * 20;
            this.health = 100;
        } else {
            alert('Нельзя повысить level умершего');
        }
    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}