import React from 'react'
import '../css/SongRow.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useDatalayerValue } from '../DataLayer';


function SongRowItem({ image, title, artist, album }) {
    const [{ lightmode }] = useDatalayerValue();

    return (
        
        <div className="songRow">
            <Card className={`songRow_card ${lightmode === false ? `dark_songRow_card`: `bright_songRow_card`}`}>
                <CardContent>
                    <img className="songRow_album" src={image} alt="" />
                </CardContent>
                <CardContent>
                        <h3>{title}</h3>  
                    { artist ? (
                        <Typography className="songRow_info" variant="body2" component="p" color="textSecondary">
                        {artist}
                        <br />
                    </Typography>
                    ) : null}
                    { album ? (
                        <Typography variant="body2" component="p">
                        {album} 
                    <br />
                    </Typography>
                    ): null}
                    
                </CardContent>
            </Card>
            






            {/* <img className="songRow_album" src={track.album.images[0].url} alt="" />
            <div className="songRow_info">
                <h1>{track.name}</h1>
                <p>
                   {track.artists.map((artist) => artist.name).join(", ")}
                   {track.album.name} 
                </p>
            </div> */}
        </div>
    )
}

export default SongRowItem
