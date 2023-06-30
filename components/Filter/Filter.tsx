import React from "react";
import styles from "./Filter.module.css";

interface FilterProps {
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ label, options, value, onChange }) => {
    return (
        <div className={styles.filters}>
            <div className={styles.filter}>
                <label htmlFor={`${label}Filter`}>{label}</label>
                <select
                    id={`${label}Filter`}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={styles.select}
                >
                    <option value="">All</option>
                    {options.map((option) => (
                        <option value={option} key={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>

    );
};

export default Filter;
