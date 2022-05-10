import {Button} from "react-bootstrap";
import React, {useState} from "react";
import {db} from "../../firebase";
import firebase from "firebase";
import showPost from "./Home";


function PostForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [pageUrl, setPageUrl] = useState("");


    const sendPosts = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            title: title,
            description: description,
            imageUrl: imageUrl,
            pageUrl: pageUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(r => showPost);
    };


    return (
        <form className="form3">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className=" input"
                type="text"
                placeholder="Title"
            />
            <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className=" input"
                type="text"
                placeholder="Description"
            />
            <input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className=" input"
                type="text"
                placeholder="Image Url"
            />
            <input
                value={pageUrl}
                onChange={(e) => setPageUrl(e.target.value)}
                className=" input"
                type="text"
                placeholder="Link to Webpage"
            />
            <Button variant="secondary" onClick={sendPosts} >Post</Button>
        </form>
    )
}
export default PostForm;