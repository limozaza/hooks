import React,{useState} from 'react';


const Accordion = ({items}) => {

    const [activeIndex,setActivIndex] = useState(null);




    const onTitleClick = (index)=>{
        setActivIndex(index);
    };


    const renderItems = items.map((item,index)=>{
        const active = index ===activeIndex ? 'active' : '';

        return <React.Fragment key={item.title}> 
                <div 
                className={"title "+active}
                onClick={()=>onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
    });
    return <div className="ui styled accordion">
        {renderItems}
    </div>
};

export default Accordion;

//https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=SEARCHTERM