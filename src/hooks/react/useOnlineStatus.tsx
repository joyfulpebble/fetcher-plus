import React, { useState, useEffect, useContext } from "react";
import { OnlineStatusProviderProps } from "../../types/elements";

const OnlineStatusContext = React.createContext(true);

export const OnlineStatusProvider = (props: OnlineStatusProviderProps) => {
	const [onlineStatus, setOnlineStatus] = useState<boolean>(true);

	useEffect(() => {
		window.addEventListener("offline", () => {
			setOnlineStatus(false);
		});
		window.addEventListener("online", () => {
			setOnlineStatus(true);
		});

		return () => {
			window.removeEventListener("offline", () => {
				setOnlineStatus(false);
			});
			window.removeEventListener("online", () => {
				setOnlineStatus(true);
			});
		};
	}, []);

	return (
		<OnlineStatusContext.Provider value={onlineStatus}>
			{props.children}
		</OnlineStatusContext.Provider>
	);
};

export const useOnlineStatus = () => {
	const store = useContext(OnlineStatusContext);
	return store;
};
