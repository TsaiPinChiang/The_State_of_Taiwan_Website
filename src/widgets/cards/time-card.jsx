import {
  Typography, Button, Chip
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export function TimeCard({ index, content, time, urls, innerRef, type, tags}) {
    const { t, i18n } = useTranslation();

    let baseURL = ''
    if (process.env.NODE_ENV !== 'production') {
        baseURL = 'http://127.0.0.1:5000'
    } else {
        baseURL = 'https://stateoftaiwan.ea.sinica.edu.tw/app'
    }

    function ShowUrls(props){
        const item = props.item;
        if(i18n.language == "en"){
            return (
                <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer" >
                    <Typography variant="small" component="span" className="w-12/12 text-blue-600"> {item.engRef} </Typography>
                </a>
            )
        }
        else{
            return (
                <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer">
                    <Typography variant="small" component="span" className="w-12/12 text-blue-600"> {item.ref} </Typography>
                </a>
            )
        }
    }

    if (type==="left"){
        return (
            <div ref={innerRef} className="mb-2 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-2/12"></div>
                <div className="absolute right-1/2 flex items-center order-1 bg-gray-800 shadow-xl w-4 h-1 ">
                    <h1 className="mx-auto font-bold text-ml text-white"></h1>
                </div>
                <div className="order-1 w-5/12 px-0 py-4 text-justify">
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mb-2 gap-2 font-medium text-right"
                        >{time}
                    </Typography>
                    <div className="mt-2 items-center border-t border-blue-gray-50 pt-2">
                        <div className="line-clamp-3 hover:line-clamp-none">
                            <Typography
                                variant="small"
                                className="font-normal text-gray-600 text-justify"
                            >  
                                {content}
                            </Typography>
                            <div className="flex-wrap gap-2 ">
                                    {(urls || []).map( (item, i) => 
                                        <ShowUrls key={i} item={item}/>
                                    )}
                            </div>
                        </div>
                        <div className="flex gap-2 mt-2 items-center flex-wrap">
                            {(tags || []).map( (tag, i) => {
                                return (
                                    <a key={i} href={"https://stateoftaiwan.ea.sinica.edu.tw/search/" + encodeURIComponent(tag)} target="_blank" rel="noopener noreferrer" >
                                        <Chip color="cyan" variant="ghost" value={ tag } className="text-center" size="sm"/>
                                    </a>
                                )}
                            )}
                        </div>
                    </div>
       
                </div>
            </div>
          );
    }
    else {
        return (
            <div ref={innerRef} className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-2/12"></div>
                <div className="absolute left-1/2 flex items-center order-1 bg-gray-800 shadow-xl w-4 h-1 ">
                    <h1 className="mx-auto font-semibold text-ml text-white"></h1>
                </div>
                <div className="order-1 w-5/12 px-0 py-4 text-justify">
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mb-2 gap-2 font-medium text-left"
                        >{time}
                    </Typography>
                    <div className="mt-2 items-center border-t border-blue-gray-50 pt-2 ">
                        <div className="line-clamp-3 hover:line-clamp-none">
                            <Typography
                                variant="small"
                                className="font-normal text-gray-600 text-justify"
                            >  
                                {content}
                            </Typography>
                            <div className="flex-wrap gap-2 ">
                                    {(urls || []).map( (item, i) => 
                                        <ShowUrls key={i} item={item}/>
                                    )}
                            </div>
                        </div>
                        <div className="flex gap-2 mt-2 flex flex-wrap">
                            {(tags || []).map( (tag, i) => {
                                    return (
                                    <a key={i} href={"https://stateoftaiwan.ea.sinica.edu.tw/search/" + encodeURIComponent(tag)} target="_blank" rel="noopener noreferrer" >
                                        <Chip color="cyan" variant="ghost" value={ tag } className="text-center" size="sm"/>
                                    </a>
                                )}
                            )}
                        </div>
                    </div>
                </div>
            </div>
          );
    }

}

export default TimeCard;