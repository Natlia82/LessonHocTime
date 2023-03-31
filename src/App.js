import React, {useState} from 'react';


function DateTimePretty(Component) {
    
    return function (props) {
        console.log(props);
        const dateStr = props.date;
        var diff = Math.abs(new Date() - new Date(dateStr.replace(/-/g,'/')));
        
        const years = Math.floor(diff/(1000 * 60 * 60 * 24 * 30 * 12));
        const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30) % 12);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24) % 30);
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        console.log(years + " " + months + " ")
        if (years > 0) {
           var str = years + " лет назад";
         } else if (months > 0) {
            str = months + " месяцев назад";
         } else if (days > 0) {
            str = days + " дней назад";
         } else if (hours > 0) {
            str = hours + " часов назад";
         } else if (minutes > 0) {
            str = minutes + " минут назад";
         } else if (seconds > 0) {
            str = seconds + " секунд назад";
         }
        

       
        const date = {date: str};
        console.log(date)
        return Component(date);
    }
}

const LoggerComponent = DateTimePretty(DateTime)

function DateTime(props) {
    console.log(props)
    return (
        <p className="date">{props.date}</p>
    )
}

function Video(props) {
  
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <LoggerComponent date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export  default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}
