import React from "react";

const InstaCloneArchitecture=()=>{
    return(
    <div><h3>App Architecture</h3>
        <div><p>Like Many web based applications. This App requires 3 core services</p>
        <p>The Database</p>
        <p>The Backend API server</p>
        <p>The Frontend</p>
        
        <p>The Database</p>
        <p>The database could be hosted on the local machine, on the remote server or as a Docker container. Personally i like to use it as a Docker container.</p></div>
        <p>These are the steps Getting started with hosting the MySQL database as a container.</p>
        <p>Docker uses  a bridge network to host the container. 
            If you are using linux, The container will be created on a default bridge defined on your 
            wifi or ethernet interface. Now when we create a container, it gets an ip from the specified 
            bridge network. A bridge network basically takes the traffic from the devices inside the network
            and forwards it out of the physical interface. Similarly traffic coming in passes through the interface and 
            reaches the bridge network, So as a result if we want to create a service that is served via a port, We will need 
            to somehow expose that port on the interface of the server for it to be accessible from the outside. 
        </p>
        <p>
            For creating the docker container we pull the image from a repository and intialize with the credentials and port mapping and run it.
            We will use docker run for creating it.
        </p>
    </div>);
};

export default InstaCloneArchitecture;