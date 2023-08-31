import React from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import ButtonWithLoading from '../../../components/ButtonWithLoading';

const VideoUpload = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videoUrl, setVideoUrl] = useState('');
    const [uploadStatus, setUploadStatus] = useState('');

    const [axiosSecure] = useAxiosSecure();

    const handleVideoChange = (event) => {
        setSelectedVideo(event.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('video', selectedVideo);

        axiosSecure.post('/api/upload-video', formData)
            .then(response => {
                setVideoUrl(response.data.videoUrl);
                setUploadStatus('Video uploaded successfully');
            })
            .catch(error => {
                setUploadStatus('Error uploading video');
            });
    };

    return (
        <div>
            <input type="file" accept="video/*" onChange={handleVideoChange} />

            <button onClick={handleUpload}>Upload Video</button>

            {uploadStatus && <p>{uploadStatus}</p>}

            {videoUrl && (
                <div>
                    <h2>Uploaded Video</h2>
                    <video controls width="400">
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
        </div>
    );
};

export default VideoUpload;