
import React from "react";
import {  Container, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import UserData from "../../models/UserData";
import WineItem from "../../models/WineItem";
import { codeSelector, userdataSelector, winesSelector } from "../../redux/store";
import { Delete } from "@material-ui/icons"

const Wines: React.FC = () => {
    const userData: UserData = useSelector(userdataSelector);
    const wines: WineItem[] = useSelector(winesSelector);
    const code: boolean = useSelector(codeSelector);
    function TitlebarBelowImageList() {
        return (
        
          <ImageList  cols={3} gap={18} >
            {wines.map((wine) => (
              <ImageListItem key={wine.img}>
                <img
                  src={`${wine.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${wine.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={wine.name}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={wine.name}
                  subtitle={<div><span>{wine.manufacturer}</span><span>{wine.grape}</span><span>{wine.place}</span><span>{wine.year}</span><span>{wine.cost}</span></div>}
                  position="bottom"
                />
              </ImageListItem>
            ))}
          </ImageList>
        
        );
    }

    return <div>
        <Typography align={'center'}>List of Wines</Typography>
        <IconButton >
            <Delete />
        </IconButton>
        

        <div style={{ height: '70vh' }}>
            
            {TitlebarBelowImageList()}
                
        </div>
    </div>
}
export default Wines