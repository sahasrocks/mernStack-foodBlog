import React,{useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import articleContent from './article-contents'


//pages
import NotFound from './NotFound'
import CommentList from '../components/CommentList'
//components
import Articles from '../components/Articles'
import AddCommentForm from '../components/AddCommentForm'


const Article= ()=>{
    const { name } =useParams()
    const article =articleContent.find(article => article.name === name)
    const [articlesInfo,setArticlesInfo]=useState({comments:[]});

    useEffect(()=>{
        const fetchData= async()=>{
            const result= await fetch(`/api/articles/${name}`)
            const body=await result.json();
            console.log(body);
            setArticlesInfo(body);
        }
        fetchData();
        // console.log("Mounted");
    },[name]);


    if(!article)return <NotFound />
    const otherArticles=articleContent.filter(article => article.name!==name)
    return(
        <>
            <h1 className="sm:text:4xl text-5xl underline text-center font-bold my-6 text-gray-900">{article.title}</h1>
            {article.content.map((paragraph,index)=> (
                <p className="mx-auto leading-relaxed text-base mb-4" key={index}>{paragraph}
                </p>
           ))}
           <CommentList comments={articlesInfo.comments}/>
           <AddCommentForm articleName={name} setArticlesInfo={setArticlesInfo}/>
           <h6 className="sm:text:2xl text-xl font-bold my-4 text-grey-900">Other Articles</h6>
           <div className="flex flex-wrap -m-4">
            <Articles articles={otherArticles}/>
           </div> 
        </>
    )
}
export default Article