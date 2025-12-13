import Constants from "../constants/Constants";
import { useEffect } from 'react';

export default function Index() {
    useEffect(() => {
        window.location.href = Constants.PATHS.get("Landing") + "/0";
    });

    return (
        <div>
        </div>
    );
}
