import './ExplorePage.css';
import { useState } from 'react';
import { useEffect } from 'react';

export const ExplorePage = () => {
    // Get scripts from server
    const [scripts, setScripts] = useState([]);
    
    useEffect(() => {
        const fetchScripts = async () => {
            const res = await fetch('/scripts/', {
                credentials: 'same-origin'
            });
            const data = await res.json();
            setScripts(data.scripts || []);
        };

        fetchScripts();
    }, []);

    return (
        <div className="explore-page">
            <h1>Explore Scripts</h1>
            <p>Discover and browse scripts shared by the community.</p>
            <br />

            <div className='scripts-list'>

                {scripts.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    scripts.map((script, index) => (
                        <div key={index} className="script-card">
                            <h2>{script.title}</h2>
                            <h3>{script.owner}</h3>
                            <p className="date">{new Date(script.updated_at).toLocaleDateString()}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}