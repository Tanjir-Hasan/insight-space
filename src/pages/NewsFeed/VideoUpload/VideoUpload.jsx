import React from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import ButtonWithLoading from '../../../components/ButtonWithLoading';
import { useEffect } from 'react';

const VideoUpload = () => {

    // const [selectedVideo, setSelectedVideo] = useState(null);
    // const [videoUrl, setVideoUrl] = useState('');
    // const [uploadStatus, setUploadStatus] = useState('');

    const [axiosSecure] = useAxiosSecure();

    // const handleVideoChange = (event) => {
    //     setSelectedVideo(event.target.files[0]);
    // };

    // const handleUpload = () => {
    //     const formData = new FormData();
    //     formData.append('video', selectedVideo);

    //     console.log(formData)

    //     axiosSecure.post('/api/upload-video', formData)
    //         .then(response => {
    //             setVideoUrl(response.data.videoUrl);
    //             setUploadStatus('Video uploaded successfully');
    //             console.log(response.data.videoUrl)
    //         })
    //         .catch(error => {
    //             setUploadStatus('Error uploading video');
    //         });
    // };



    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        axiosSecure.post('/api/upload', formData)
            .then(response => {
                setUploadStatus('File uploaded successfully');
            })
            .catch(error => {
                setUploadStatus('Error uploading file');
            });
    };


    const [fileList, setFileList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosSecure.get('/api/files')
            .then(response => {
                setFileList(response.data.files);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching files:', error);
                setLoading(false);
            });
    }, []);


    return (
        <div>
            {/* <input type="file" accept="video/*" onChange={handleVideoChange} />

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
            )} */}


            <div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload File</button>
                {uploadStatus && <p>{uploadStatus}</p>}
            </div>


            <h2>Uploaded Files</h2>
            {loading ? <p>Loading...</p> :
                fileList.length === 0 ? <p>No files uploaded yet.</p> :
                    <ul>
                        {fileList.map((file, index) => (
                            <li key={index}>{file}</li>
                        ))}
                    </ul>
            }
        </div>
    );
};

export default VideoUpload;