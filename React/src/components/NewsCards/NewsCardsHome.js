import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container,Stack } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';


const NewsCardsHome = () => {
    let [news,setNews]=useState([])
    let [newsCount,setNewsCount]=useState(5)
    const api=async()=>{

        let result =await fetch(`https://newsapi.org/v2/top-headlines?language=en&pageSize=${newsCount}&apiKey=68c450708652478b8705997e532acb30`)
        result=await result.json()
        console.log(result)
        if(result.articles.length!=news.length)
        {setNews(result.articles)
   }
   if(news.length)
   console.log(news)
    }

 useEffect(()=>{
    api()
AOS.init({duration:1000})
   
 },[news,newsCount])

  return (
    <>
    <h1 id='topStories' style={{textAlign:'center',textDecoration:'underline',fontFamily:'ubuntu'}}><span style={{color:'green'}}>Top</span> Stories</h1>

<div style={{display:'flex',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-evenly',backgroundColor:'rgb(251, 255, 251)'}}>
{
            news.map((data)=>(
                <Card data-aos="fade-up"
                 sx={{ 
                  maxWidth: 600,
                  minWidth:300,
                  width:'40vw',
                  display:'inline-block',
                  mt:2,mb:2,ml:2,mr:2 
                  }}>
                <Box sx={{
                  height:'50vh',
                  // maxHeight:400,
                  minHeight:200
                  }}>
            <CardMedia
              sx={{ height: '100%',width:'auto' }}
              image={data.urlToImage}
              title={data.author}
            /></Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography gutterBottom variant="h8" component="div">
               -- {data.source.name}
              </Typography>
              <Typography gutterBottom variant="h8" component="div">
               -- {data.publishedAt}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{color:'green',fontWeight:'bold','&:hover':{bgcolor:'transparent'}}}>Save</Button>
              <Button size="small" sx={{color:'green',fontWeight:'bold','&:hover':{bgcolor:'transparent'}}}>Learn More</Button>
            </CardActions>
          </Card>
            )) }
          </div>
          {newsCount<100?  <Button sx={{textAlign:'center',margin:'auto',display:'block',color:'green',fontWeight:'bold','&:hover':{bgcolor:'transparent'},mt:5}} onClick={()=>{setNewsCount(newsCount+5)}}>Load More</Button>:null}
  </>
  )
}

export default NewsCardsHome