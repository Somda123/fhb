import React, { useState } from 'react';


function Settings() {
    const [selectedOption, setSelectedOption] = useState(''); // State to store selected option

    // State for editing header and footer
    const [headerText, setHeaderText] = useState('CIRCUIT HOUSE DANTEWADA');
    const [footerText, setFooterText] = useState('© Dantewada, Chhattisgarh...');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    // Handle changes to header text
    const handleHeaderChange = (event) => {
        setHeaderText(event.target.value);
    };

    // Handle changes to footer text
    const handleFooterChange = (event) => {
        setFooterText(event.target.value);
    };

    return (
        <div className="settings-container">
            {/* Left side settings options */}
            <div className="settings-options">
                <h2>General Settings</h2> {/* Heading for the options */}
                <ul>
                    <li onClick={() => handleOptionClick('header')}>Header</li>
                    <li onClick={() => handleOptionClick('footer')}>Footer</li>
                </ul>
            </div>

            {/* Right side settings content */}
            <div className="settings-content">
                {selectedOption === '' && <p>Please select an option from the left to edit.</p>}

                {/* Header Editing */}
                {selectedOption === 'header' && (
                    <div>
                        <h3>Edit Header</h3>
                        <input
                            type="text"
                            value={headerText}
                            onChange={handleHeaderChange}
                            placeholder="Enter header text"
                            style={{ width: '100%', padding: '10px' }}
                        />
                    </div>
                )}

                {/* Footer Editing */}
                {selectedOption === 'footer' && (
                    <div>
                        <h3>Edit Footer</h3>
                        <textarea
                            value={footerText}
                            onChange={handleFooterChange}
                            placeholder="Enter footer text"
                            style={{ width: '100%', height: '100px', padding: '10px' }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Settings;
