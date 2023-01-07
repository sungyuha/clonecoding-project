import React,{useState} from "react";
import {BsYoutube, BsSearch} from 'react-icons/bs';
// import { useNavigate } from "react-router-dom";

const SearchHeader: React.FunctionComponent = () => {
    // const navigate = useNavigate();

    // useState 초기값은 비어있음
    const [text, setText] = useState('');

    // type MyFormProps = {
    //     onSubmit: (form: { name: string; description: string }) => void;
    // };

    // const handleSubmit = (e: any) => {
    //     e.preventDefault();
    //     navigate(`/videos/${text}`);
    // };

    return (
        <header>
            {/* 로고가 들어있는 부분 */}
            <div>
                <BsYoutube />
                <h1>Youtube</h1>
            </div>
            {/* 사용자가 검색하는 부분 */}
            <form >
                {/* onChange 이벤트가 발생하면 setText로 들어온 값이 e.target.value로 업데이트 */}
                <input 
                    type="text" 
                    placeholder="검색" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                />
                <button>
                    <BsSearch />
                </button>
            </form>
        </header>
    )
}

export default SearchHeader;