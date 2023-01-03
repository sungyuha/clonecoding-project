import React from "react";
import {BsYoutube} from 'react-icons/bs';

const SearchHeader = () => {
    return (
        <header>
            {/* 로고가 들어있는 부분 */}
            <div>
                <BsYoutube />
                <h1>Youtube</h1>
            </div>
            {/* 사용자가 검색하는 부분 */}
            <form></form>
        </header>
    )
}

export default SearchHeader;