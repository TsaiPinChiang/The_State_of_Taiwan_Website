import { useEffect, createRef, useRef } from "react";
import { TimeCard } from "@/widgets/cards";
import { useTranslation } from "react-i18next";


export function Timelines({ eventList, selectedYear, selectedTag }) {
    const { t, i18n } = useTranslation();
    const myRefs = useRef([]);  //每個 event 對應到一個 Ref, 供畫面自動 scrolling 用
    myRefs.current = eventList.map((element, i) => myRefs.current[i] ?? createRef());

    function ShowEvents(event){
        if(i18n.language == "en"){
            if(event.category === "國內"){
                return(
                    <TimeCard key={event.id} innerRef={myRefs.current[event.id]} index={event.id} 
                    content={event.content_eng} time={event.time} urls={event.urls} type="left" tags={event.engTags}></TimeCard>
                )
            }
            else{
                return(
                    <TimeCard key={event.id} innerRef={myRefs.current[event.id]} index={event.id} 
                    content={event.content_eng} time={event.time} urls={event.urls} type="right" tags={event.engTags}></TimeCard>
                )
            }
        } else{
            if(event.category === "國內"){
                return(
                    <TimeCard key={event.id} innerRef={myRefs.current[event.id]} index={event.id} 
                    content={event.content} time={event.time} urls={event.urls} type="left" tags={event.tags}></TimeCard>
                )
            }
            else{
                return(
                    <TimeCard key={event.id} innerRef={myRefs.current[event.id]} index={event.id} 
                    content={event.content} time={event.time} urls={event.urls} type="right" tags={event.tags}></TimeCard>
                )
            }
        }

    }



    useEffect(() => {
        // scroll to selected id 
        if (selectedYear !== 0 && myRefs.current[selectedYear].current){
            myRefs.current[selectedYear].current.scrollIntoView(
                { behavior: 'smooth' }
            )
        }
    }, [selectedYear]);
        
    return (
        
        <div className="relative wrap overflow-hidden p-2 h-full">
        <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-gray-600"></div>
        
        {i18n.language == "en"? 
        (
            eventList ?.filter((e) =>
            e.engTags.some((tag) => tag.includes(selectedTag))
            ).map( (event, i) => ShowEvents(event))
        ) : 
        (
            eventList ?.filter((e) =>
            e.tags.some((tag) => tag.includes(selectedTag))
            ).map( (event) => ShowEvents(event))
        )

        }
        </div>
      
    );
  }

export default Timelines;