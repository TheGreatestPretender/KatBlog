import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div style={{
                borderColor: 'rgb(171, 169, 195)',
                borderStyle: 'solid',
                borderRadius: '10px'
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
                    <td><i class="fas fa-file-download fa-2x"></i></td>
                </tr>
            </table>
        </div>
    )
};

export default About;