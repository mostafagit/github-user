import React, { useState, useEffect, createContext } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';
import Followers from '../components/Followers';

const rootUrl = 'https://api.github.com';
const GithubContext = createContext()

const GithubProvider =({children})=>{
    const [githubUser,setGithubUser] = useState(mockUser)
    const [repos,setRepos] = useState(mockRepos)
    const [followers,setFollowers] = useState(mockFollowers)
    const [requests,setRequests] = useState(0)
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState({show:false,msg:""})

    const searchGithubUser = async(user) =>{
        toggleError()
        setIsLoading(true)
    const response = await axios.get(`${rootUrl}/users/${user}`).catch(err => console.log(err))
    if(response){
        setGithubUser(response.data)
        const {login,followers_url} = response.data
        await Promise.allSettled([axios(`${rootUrl}/users/${login}/repos?per_page=100`)
        ,axios(`${followers_url}`)]).then(res=>{
            const[repos,Followers] =res
            const status = "fulfilled"
            if(repos.status === status){
                setRepos(repos.value.data)
            }
            if(Followers.status === status){
                setFollowers(Followers.value.data)
            }
        })

    }else{
        toggleError(true,"there is no user with that username")
    }
    checkRequests()
    setIsLoading(false)
    }
        
    const checkRequests = () =>{
        axios(`${rootUrl}/rate_limit`).then(({data})=>{
            let {rate : {remaining}} = data
            setRequests(remaining)
            if(remaining === 0){
            toggleError(true,"sorry, you have exceede your hourly rate limit!")
            }}).catch(err=>console.log(err))}

    function toggleError(show = false,msg =""){
        setError({show,msg})
    }
    useEffect(checkRequests,[])
    return(
        <GithubContext.Provider value={{githubUser,repos,followers,requests,error,searchGithubUser,isLoading}}>
            {children}
        </GithubContext.Provider>
    )
}
export {GithubContext,GithubProvider}