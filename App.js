import React from "react";
import Navbar from "./components/Navbar";
import Destination from "./components/Destination";
import data from "./data";

export default function App() {
    
    const destJSXArr = data.map((destination) => {
        return (
            <Destination 
                key={destination.id} 
                destination={destination} 
            />
        )
    })
    
    return (
        <div>
            <Navbar />
            {destJSXArr}
        </div>
    )
}