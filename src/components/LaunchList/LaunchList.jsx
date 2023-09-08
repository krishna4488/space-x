import React from "react"
import { Launch } from "../Launch/Launch"
import './styles.css'
import axios from "axios"
export class LaunchList extends React.Component
{   
    state={
        Launches:[]
    }
    componentDidMount = () =>{
    this.getLaunches()
}
    getLaunches = () =>
    {
        axios.get("https://api.spacexdata.com/v3/launches").then((response) =>{
            this.setState(
                {
                    Launches:response.data
                })
        }).catch((error) =>
        {
            console.log(error)
        })
    }

    launchlist = () =>
    {
        const launchlistComponents=this.state.Launches.map((launch,index) =>{
            
            const image=launch.links.flickr_images.length===0 ? "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Soyuz_TMA-9_launch.jpg/255px-Soyuz_TMA-9_launch.jpg":launch.links.flickr_images[0];
            return <Launch key={"launch_" +index} banner={image} title={launch.mission_name} launchdate={launch.launch_date_local}
            description={launch.details}/>
    })
    return launchlistComponents;
}
    render()

    {   
        console.log(this.state.Launches[0])
        
    
        return(
            
            <div className="launch-list">
               {this.launchlist()}
            </div>
        )
    }
}