class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = new Map();
        this.outOfStock = new Set();
    }

    addItem(itemName, quantity) {
        this._validQuantity(quantity);

        if (this.capacity <= this.items.size + this.outOfStock.size) {
            throw new Error('The inventory is already full.');
        }

        this._addItems(itemName, quantity);

        return `Added ${quantity} ${itemName}(s) to the inventory.`;
    }

    sellItem(itemName, quantity) {
        this._validQuantity(quantity);

        if (this.items.has(itemName) == false) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }

        const existingQty = this.items.get(itemName);

        if (quantity > existingQty) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }

        this.items.set(itemName, existingQty - quantity);

        if (this.items.get(itemName) <= 0) {
            this.outOfStock.add(itemName);
            this.items.delete(itemName);
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }

    restockItem(itemName, quantity) {
        this._validQuantity(quantity);
        this._addItems(itemName, quantity);

        if (this.outOfStock.has(itemName)) {
            this.outOfStock.delete(itemName);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }

    getInventorySummary() {
        const result = ['Current Inventory:'];

        for (const [name, qty] of this.items) {
            result.push(`${name}: ${qty}`);
        }

        if (this.outOfStock.size > 0) {
            result.push(`Out of Stock: ${[...this.outOfStock.values()].join(', ')}`);
        }

        return result.join('\n');
    }

    _validQuantity(qty) {
        if (qty <= 0) {
            throw new RangeError('Quantity must be greater than zero.');
        }
    }

    _addItems(itemName, quantity) {
        if (this.items.has(itemName) == false) {
            this.items.set(itemName, 0);
        }

        const existing = this.items.get(itemName, quantity);
        this.items.set(itemName, existing + quantity);
    }
}

const manager = new InventoryManager(3);
console.log(manager.addItem('Drill', 10));
console.log(manager.addItem('Hammer', 5));
console.log(manager.addItem('Chisel', 3));

console.log(manager.sellItem('Drill', 3));
console.log(manager.sellItem('Hammer', 5));

console.log(manager.restockItem('Drill', 5));
console.log(manager.restockItem('Paintbrush', 1));

console.log(manager.getInventorySummary());
