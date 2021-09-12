import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div style={{
                borderColor: '#8FC0A9',
                borderStyle: 'solid',
                borderRadius: '10px',
                display: 'flex',
                width: '98px',
                justifyContent: 'flex-end',
                marginLeft: '94.5%',

            }}></div>

            <table className="table">
                <tr>
                    <td>
                        <a className="links" href="https://www.linkedin.com/in/kattschmidt/">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                    </td>
                    <td>
                        <a className="links" href="https://github.com/TheGreatestPretender">
                            <i class="fab fa-github-square fa-2x"></i>
                        </a>
                    </td>
                    <td>
                        <a className="links" download href="kat_schmidt_resume.pdf">
                            <i class="fas fa-file-download fa-2x"></i>
                        </a>
                    </td>
                </tr>
            </table>
        </div>
    )
};

export default About;