import React from "react";
import "../../styles/details.css";

export const Details = () => (
	<div className="main-wrapper text-center mt-5">
		<div className="pic-description d-flex">
            <img className="image" src="https://via.placeholder.com/670x400" alt="Placeholder Image"/>
            <div className="mx-5 text-white">
                <h1>Character Name</h1>
                <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum augue nulla, dignissim eget est suscipit, posuere posuere augue. Mauris semper fermentum mi vel pellentesque. Ut aliquam blandit bibendum. Cras a placerat dolor. In dictum placerat finibus. Donec non posuere dui. Nam aliquet gravida sem, a ultrices nisl rhoncus nec. Vivamus eu dolor nec nisl lacinia vulputate id id lorem. Sed id iaculis augue, vitae sagittis est. Sed volutpat, diam nec hendrerit eleifend, dolor risus ornare nisi, vel rhoncus metus ante et massa. Praesent nec erat varius, hendrerit est consectetur, cursus leo. Suspendisse fermentum accumsan purus, ut commodo nunc vulputate sit amet.</p>
            </div>
        </div>
        <div className="details d-flex text-white justify-content-around mt-4">
            <div>
                <p><strong>Name</strong></p>
                <p>Character Name</p>
            </div>
            <div>
                <p><strong>Birth Year</strong></p>
                <p>Year</p>
            </div>
            <div>
                <p><strong>Gender</strong></p>
                <p>n/a</p>
            </div>
            <div>
                <p><strong>Height</strong></p>
                <p>n/a</p>
            </div>
            <div>
                <p><strong>Skin Color</strong></p>
                <p>Color</p>
            </div>
            <div>
                <p><strong>Eye Color</strong></p>
                <p>Color</p>
            </div>
        </div>
	</div>
);
