import { useEffect, useState } from "react";

function useLocalStorage(key: string, initialValue: any) {
	const [items, setItems] = useState(() => {
		let currItem;
		try {
			currItem = JSON.parse(localStorage.getItem(key) || String(initialValue));
		} catch (error) {
			currItem = initialValue;
		}
		return currItem;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(items));
	}, [items, key]);
	return [items, setItems];
}

export default useLocalStorage;
