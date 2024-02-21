import React from "react";
import NumberSelector from "./NumberSelector";
import "./style.scss";

export default function ItemPicker() {
    const initialValue = 0;
    const minValue = 0;
    const maxValue = 10;
    const items = [
        { id: "mattress", itemName: "Mattress", maxValue: 6 },
        { id: "bed", itemName: "Bed", maxValue: 5 },
        { id: "table", itemName: "Table", maxValue: 3 },
        { id: "coffeeTable", itemName: "Coffee Table" },
        { id: "chair", itemName: "Chair" },
        { id: "Armchair", itemName: "armchair", maxValue: 4 },
        { id: "sofa", itemName: "Sofa", maxValue: 2 },
        { id: "sofaBed", itemName: "Sofa Bed", maxValue: 2 },
        { id: "bag", itemName: "Bags", initialValue: 1, maxValue: 20 },
        { id: "boxes", itemName: "Boxes", initialValue: 1 }
    ];

    return (
        <>
            {items.map((item, i) =>
                <NumberSelector
                    key={i}
                    id={item.id}
                    itemName={item.itemName}
                    initialValue={item.initialValue ? item.initialValue : initialValue}
                    minValue={item.minValue ? item.minValue : minValue}
                    maxValue={item.maxValue ? item.maxValue : maxValue}
                />
            )}
        </>
    );
}
