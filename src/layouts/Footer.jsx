import React from "react";

const Footer = () => {

    const github = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 0H5C2.23858 0 0 2.23858 0 5V25C0 27.7614 2.23858 30 5 30H11.25V26.4C10.725 26.4 9.6 26.75 8.25 26.4C6.225 25.875 6.525 24.675 5.55 23.25C4.93421 22.35 4.035 22.11 3.975 21.75C3.9 21.625 3.93 21.375 4.65 21.375C5.55 21.375 6.3 22.05 6.45 22.2C6.6 22.35 7.275 23.7 7.95 24.15C8.625 24.6 9.14533 24.675 9.75 24.675C10.65 24.675 10.95 24.3 11.25 24.15C11.55 24 11.46 23.445 11.7 23.025C11.94 22.605 12.2 22.3 12.3 22.2C11.7 22.2 9.16516 21.7476 7.725 20.55C6.56859 19.5883 5.79469 18.1282 5.55 15.975C5.16648 12.6 6.45 11.025 6.975 10.5C6.9 10.325 6.75 9.705 6.75 8.625C6.75 7.545 7.05 6.625 7.2 6.3C7.775 6.35 9.09 6.555 9.75 6.975C10.41 7.395 11.25 7.75 11.475 7.875C12 7.7 13.2289 7.425 14.85 7.425C16.8 7.425 18.3 7.75 18.9 7.875C19.2 7.7 19.815 7.245 20.775 6.825C21.975 6.3 22.525 6.3 22.8 6.3C22.95 6.575 23.2327 6.9 23.325 8.1C23.4173 9.3 23.325 9.675 23.025 10.5C23.7 10.975 24.945 12.735 24.525 15.975C24 20.025 22.35 20.55 21.375 21.15C20.595 21.63 18.65 22.05 17.775 22.2C17.975 22.375 18.405 22.83 18.525 23.25C18.675 23.775 18.825 24.3 18.825 25.5V30H25C27.7614 30 30 27.7614 30 25V5C30 2.23858 27.7614 0 25 0Z" fill="#FFF"/>
                    </svg>
    const instagram = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 0C19.0755 0 19.584 0.0149999 21.183 0.0899999C22.7805 0.165 23.868 0.4155 24.825 0.7875C25.815 1.1685 26.649 1.6845 27.483 2.517C28.2457 3.26684 28.8359 4.17388 29.2125 5.175C29.583 6.1305 29.835 7.2195 29.91 8.817C29.9805 10.416 30 10.9245 30 15C30 19.0755 29.985 19.584 29.91 21.183C29.835 22.7805 29.583 23.868 29.2125 24.825C28.837 25.8267 28.2467 26.7339 27.483 27.483C26.7329 28.2455 25.826 28.8356 24.825 29.2125C23.8695 29.583 22.7805 29.835 21.183 29.91C19.584 29.9805 19.0755 30 15 30C10.9245 30 10.416 29.985 8.817 29.91C7.2195 29.835 6.132 29.583 5.175 29.2125C4.17349 28.8367 3.26629 28.2464 2.517 27.483C1.75411 26.7333 1.1639 25.8262 0.7875 24.825C0.4155 23.8695 0.165 22.7805 0.0899999 21.183C0.0194999 19.584 0 19.0755 0 15C0 10.9245 0.0149999 10.416 0.0899999 8.817C0.165 7.218 0.4155 6.132 0.7875 5.175C1.16285 4.17327 1.75321 3.26598 2.517 2.517C3.26651 1.75385 4.17364 1.16359 5.175 0.7875C6.132 0.4155 7.218 0.165 8.817 0.0899999C10.416 0.0194999 10.9245 0 15 0ZM15 7.5C13.0109 7.5 11.1032 8.29018 9.6967 9.6967C8.29018 11.1032 7.5 13.0109 7.5 15C7.5 16.9891 8.29018 18.8968 9.6967 20.3033C11.1032 21.7098 13.0109 22.5 15 22.5C16.9891 22.5 18.8968 21.7098 20.3033 20.3033C21.7098 18.8968 22.5 16.9891 22.5 15C22.5 13.0109 21.7098 11.1032 20.3033 9.6967C18.8968 8.29018 16.9891 7.5 15 7.5ZM24.75 7.125C24.75 6.62772 24.5525 6.15081 24.2008 5.79917C23.8492 5.44754 23.3723 5.25 22.875 5.25C22.3777 5.25 21.9008 5.44754 21.5492 5.79917C21.1975 6.15081 21 6.62772 21 7.125C21 7.62228 21.1975 8.0992 21.5492 8.45083C21.9008 8.80246 22.3777 9 22.875 9C23.3723 9 23.8492 8.80246 24.2008 8.45083C24.5525 8.0992 24.75 7.62228 24.75 7.125ZM15 10.5C16.1935 10.5 17.3381 10.9741 18.182 11.818C19.0259 12.6619 19.5 13.8065 19.5 15C19.5 16.1935 19.0259 17.3381 18.182 18.182C17.3381 19.0259 16.1935 19.5 15 19.5C13.8065 19.5 12.6619 19.0259 11.818 18.182C10.9741 17.3381 10.5 16.1935 10.5 15C10.5 13.8065 10.9741 12.6619 11.818 11.818C12.6619 10.9741 13.8065 10.5 15 10.5Z" fill="#FFF"/>
                    </svg>
    const gmail = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 25V9.3L14.7 16.65L0 9.3V25C0 27.7614 2.23858 30 5 30H25C27.7614 30 30 27.7614 30 25Z" fill="#FFF"/>
                        <path d="M30 7.95L14.7 15L0 7.95V5C0 2.23858 2.23858 0 5 0H25C27.7614 0 30 2.23858 30 5V7.95Z" fill="#FFF"/>
                    </svg>
    const youtube = <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M48.953 7.845C48.67 6.33104 48.1185 4.96037 47.3574 3.87871C46.5748 2.76379 45.6156 1.96626 44.5703 1.5614C40.6583 0.0154866 24.9854 0.0154869 24.9854 0.0154869C18.4516 -0.0959669 11.9193 0.394235 5.42556 1.48333C4.38026 1.9181 3.42283 2.73345 2.63843 3.85685C1.8677 4.96866 1.30944 6.33969 1.01782 7.84188C0.31727 13.5001 -0.0231027 19.2453 0.00128563 25C-0.023711 30.7495 0.315827 36.4928 1.01782 42.1581C1.30319 43.654 1.85937 45.0188 2.63218 46.1213C3.40499 47.2237 4.36737 48.0201 5.42556 48.4417C9.38961 49.9845 24.9854 49.9845 24.9854 49.9845C31.5276 50.0961 38.0682 49.6059 44.5703 48.5166C45.6156 48.1118 46.5748 47.3143 47.3574 46.1993C48.1281 45.0969 48.676 43.7259 48.951 42.233C49.6698 36.577 50.0193 30.8295 49.9946 25.0718C50.0486 19.2898 49.6996 13.5151 48.953 7.84188V7.845ZM20.0028 35.6933V14.3097L33.0427 25.0031L20.0028 35.6933Z" fill="#FFF"/>
                    </svg>

    return (
        <div>

            <div className="bg-black text-white items-center justify-center py-20">
                <div className="flex flex-row w-48 mx-auto justify-between">
                    <a href="https://github.com/ICRT-dev" className="hover:scale-105 transform transition-all duration-300">
                        {github}
                    </a>
                    <a href="https://www.instagram.com/icrtikmi/" className="hover:scale-105 transform transition-all duration-300">
                        {instagram}
                    </a>
                    <a href="#" className="hover:scale-105 transform transition-all duration-300">
                        {gmail}
                    </a>
                    <a href="https://www.youtube.com/channel/UCAAVVbKYuAPeqA-J84J6nnA" className="hover:scale-105 transform transition-all duration-300">
                        {youtube}
                    </a>
                </div>
                <div className="items-center justify-center text-center text-gray-500 md:text-lg text-xs mt-10">
                    <p>&copy; 2021 All Right Reversed  -  Design by UI/UX Team ICRT</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;