import React from "react";
import "./MainContent.css";
// import img from './img/';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import vector from './icon/Vector.png';
import  malte from'./icon/malte.png';
import stroke from './icon/Vector (Stroke).png';


const MainContent = () => {
  return (
    <div className="main_content">
      <section id="main_content">
        <section className="main_cont_header">
          <p>Student accommodation in our top cities</p>
        </section>
        <section id="main_cont_img">
          <div
            className="main_cont_img_box"
            style={{
              backgroundImage:
                "url(" +
                "https://s3-alpha-sig.figma.com/img/45df/ccd9/48e6eca3f2dc135eb39d2f7cefca84e1?Expires=1616976000&Signature=DKEXgjbOP4qIvLFF5JATDk6d0Rr7qvjW03mSUH-681IfzsD6vYDo9LFVr~gAYG3-lam6TZbXcwNwLAXq8gkL6c9zK4G9p~W5UQVjdEa5C0qK0Z27aPvmdZ1SZNu1zRfkIVYzgpuJoF1tz22hwsbhZ9t4~o6S~qB7wynOhr5fWGrcqXAMvVBrCx1U6lF3ln047RretPqxw6kgXC6HrU8ktlTcWfE1NFnsAAY9CnPQlH2uDwr1ZQxk0x3Teym0f~1RrCOXU7YXRF9f1UY8iLAnvYb~aNlgMXfNVwTvDL93SPQVDettUqNpEE7~QkbiXK21wKvYxOnGVHr00qSsShl2ig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" +
                ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <a href="">
              <h3>Birmingham</h3>
              <span className="hide"> properties</span>
            </a>
          </div>
          <div
            className="main_cont_img_box"
            style={{
              backgroundImage:
                "url(" +
                "https://s3-alpha-sig.figma.com/img/9541/bb00/ecf561340f5b6d0a0a575153a42bd34b?Expires=1616976000&Signature=U7nOCMcL-8UoWvaRJHXITR7THgPgh1dzBan6hiwvYUlvWb3QbIaxKjJKO1NXCmJqPRWPjfTpR6ycD2lLbaB8YnP2GP-SFQRuahrBQG5OFaIF89OnwNUpw3wtuFqNHc~FI9TnbRmt868wTSBY2yEdYiXC5EB67OID1a4h0b9YDIN8JR6ThkT~IFM6ypRj1BGjUF~pAMN78FByEECCf1VsUl~11dXEeH5p3NX2m~3Dho4bbJCRWpZHFORCOaPamrO28C9KQQyP-pV9ZG7TcGXLUPGFnxoC9KOFdnpHe36K0BxnAKDDjDU3cqjQZ0Yt316~oLi3Gj-eVxkrlwqf4oLfBw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" +
                ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <a href="">
              <h3>Newcastle</h3>
              <span className="hide"> properties</span>
            </a>
          </div>
          <div
            className="main_cont_img_box"
            style={{
              backgroundImage:
                "url(" +
                "https://s3-alpha-sig.figma.com/img/9a53/db8a/aba0ba47ee230da80b06a69aa3edee68?Expires=1616976000&Signature=O8YLIa9tVi80-QEc5uydGACQfeKm324pq1WuwhyrH3zWXiu0V~qQMx2Y2RiSTV46czaai4K8yJI9P-Mfy5gg01bqqWXilGiPlSlJ~yMmiBySvf3K7rS1VS51iXt3---~lmecMJozwWUd6wfzdasNoEapOdKkfn6B6eKpZgqtvQ3Bh4CWgYHDAVV0ai-PMPJinG8pdoCKZdzQ1FG-~HFqkpNsV6oQ10litfSr8xkrEcemRLXw-9cItuyd9ahbolbmUkwbJCivhsHHTETCUFLcN-WwFBDqWp1WHcn-1O~vQAON~5XR5NijbRrGX9Wsfrlr~CDtXb7D-xE-J0h7axE9AQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" +
                ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <a href="">
              <h3>Sheffield</h3>
              <span className="hide"> properties</span>
            </a>
          </div>
          <div
            className="main_cont_img_box"
            style={{
              backgroundImage:
                "url(" +
                "https://s3-alpha-sig.figma.com/img/4e3a/4dd7/4bca8a70d5e6842b13e80629d922e695?Expires=1616976000&Signature=E8E8CZUb78KhnfZjg4iLftpfe8RU4UMqrdQZ-S7RDES5cZtDg3cQYDA3VcG9ayJg8inkUcTWQDHwc4MCASz6wnj8H~mQbXcDW2e2WX4FhRJaYnzVf987ivP5a-XiKWzM2AW-kumVBrYGEBQQslAs~grNXhyoOvi33kEyLzWRIlvz8vZc9xx1qKez7GX9v-USLtkp9NoT90o4Yc4suiA0ge5UPJNP6mO70pmSPdgFPu2wN7Fgos6cdmuw9i9J9KdbagGG91h7UbLMoMrTsxY5FLbZ1V6nKEbJaKaoLkAWwI5xQFPwJvnk5qcy361xCpQP6Opg7HMg3WXyyhXB5pddlw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" +
                ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <a href="">
              <h3>Leicester</h3>
              <span className="hide"> properties</span>
            </a>
          </div>
          <div
            className="main_cont_img_box"
            style={{
              backgroundImage:
                "url(" +
                "https://s3-alpha-sig.figma.com/img/e628/dd3d/43f539417ecdf117d123096876341949?Expires=1616976000&Signature=WKvkQ4tKCo-oBKRsXjkbZxwePHcygjVx5q~X7juYM8tvO2ebDU~M9RHmt2I6mYzN7U5UysCe2gTrcVOhgDQADbVPblGhEAP0HhD46eIVOZoFRdG~wLP34FCcCRGSytlAzdXv7tZ68H~TK7loOcd4OaiJLqNNNm7tRPHGyHbp2ebTUbzdKpQVRe~FKWe2T76l53jp0fCZD6wceYWYkB2f-t8nZgTdfGzZSn2ONxR5F6K~VIUEp9AG4ONaLO4WVOcQmtz2BYuvP0XDDRga5POXv2n57PT~dMzLP11HAWT5ZCVlsXdTIha3zfVMnzqjE2Eh6~1Pr-xtvT-ubLTiKK1-zQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" +
                ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <a href="">
              <h3>Brighton</h3>
              <span className="hide"> properties</span>
            </a>
          </div>
          <div
            className="main_cont_img_box"
            style={{
              backgroundImage:
                "url(" +
                "https://s3-alpha-sig.figma.com/img/b214/fec1/bf151fce33343d314defb6a47955dbb5?Expires=1616976000&Signature=TEY6xwG7ud8IU1jel5~AfzD2VDAFRBWSGSSjwReeOMzsbPklaRhmhRuqD7hNtMG1VLG61mvYttLVSR9YjjqjR7C75-nGGeFNVWqPIFJ1nlryta138l5MYNv9df2PpHcCMkFiAKVGMyFHFb8BFAHRVEvEEt1W0d9IXOqjCYpe2J7KMVSDpQgHNdAGASqS2Kd1J8PbQT8MmpxFL-LnzJksy~q2~eZ8r53JrdMLVw0c1gbQ~baKveIsnSwmUHmboJ9mJHoXtVeqXQSeRg0Y7MsZFORVVrO8A4RoTn2PIKhOeVUrWF9X5IvQ1cAWl4D0kYclIP8LpHRoeclrYFp7VqV~tQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" +
                ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <a href="">
              <h3>Porthsmouth</h3>
              <span className="hide"> properties</span>
            </a>
          </div>
          <div
            className="main_cont_img_box"
            style={{
              backgroundImage:
                "url(" +
                "https://s3-alpha-sig.figma.com/img/c7fb/8fa3/94e5429a33d3e2c25b04e50db0eef16b?Expires=1616976000&Signature=DrYbQCjIjIPFb9EZtJXKSsvMBLOlrgViReG3qrTuB0M2JJ7Eg5r5lj-Tr4iqEXDB0Tm0EkJgy4VAMiDmaXP90upZ6SDB5vjJU5vuv5OsSVev5HkbIlB639W3R4YSuFs0MGaj2eNZvtcghkRihNX0Lsv1q435PP6228NrJNxPnl~Y5H~hbNM~cW0V23K7D5hdz3siKhqAa-p1IRnoQoqL0Of7dEdhrZ~wfLGa68hme2mPqnWvFwXx889j3Pmpd4N8Je-9~avQLI25dxHUtWtfJPSwjwtAg0k2XIdjOj0kmcTD91szsxf2D-ZUNLtXcdWDgRhVA7Pj6cnRTlgMNBmlUw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" +
                ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <a href="">
              <h3>Coventry</h3>
              <span className="hide"> properties</span>
            </a>
          </div>
          <div
            className="main_cont_img_box"
            style={{
              backgroundImage:
                "url(" +
                "https://s3-alpha-sig.figma.com/img/a02c/ee64/950e96dfaeaa7c9c9e3908f93b98a4c5?Expires=1616976000&Signature=Msq-kKeTc36etM44EivBOkiDHaKjcxEZbTVk0KYhH-k9kDo6~HYyWmH34dDzLiMJiHDyRFLqnhX~hen67ZP0C15D0AGcHpkhCRlW0lPwSk-D5HAjJ1ztr3mQw81LT9tk1BOJPw-8AJI84g-vDffaa69u07redLbdfw58ZsxC00c3KXNb4OmYzPoINK3TgnjgTM~N-3r4VOEm4EdXCf7zsb2hfBonmk7CexgOXvEPjvT44q-11MSvYcxxGuAcbvm1SQtsmVZw2-~ySExJMy-A7w3aKrmD7zzY5SPjTMaz9espF8l~fjbyp2-tPL-xys8yTdhDfAj15GytNp~WYn7Hdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" +
                ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <a href="">
              <h3>Manchester</h3>
              <span className="hide"> properties</span>
            </a>
          </div>
          <div
            className="main_cont_img_box"
            style={{
              backgroundImage:
                "url(" +
                "https://s3-alpha-sig.figma.com/img/a02c/ee64/950e96dfaeaa7c9c9e3908f93b98a4c5?Expires=1616976000&Signature=Msq-kKeTc36etM44EivBOkiDHaKjcxEZbTVk0KYhH-k9kDo6~HYyWmH34dDzLiMJiHDyRFLqnhX~hen67ZP0C15D0AGcHpkhCRlW0lPwSk-D5HAjJ1ztr3mQw81LT9tk1BOJPw-8AJI84g-vDffaa69u07redLbdfw58ZsxC00c3KXNb4OmYzPoINK3TgnjgTM~N-3r4VOEm4EdXCf7zsb2hfBonmk7CexgOXvEPjvT44q-11MSvYcxxGuAcbvm1SQtsmVZw2-~ySExJMy-A7w3aKrmD7zzY5SPjTMaz9espF8l~fjbyp2-tPL-xys8yTdhDfAj15GytNp~WYn7Hdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" +
                ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <a href="">
              <h3>Liverpool</h3>
              <span className="hide"> properties</span>
            </a>
          </div>
        </section>
        <section className="main_cont_btn">
          <button className="btn">See all cities</button>
        </section>
      </section>
      <section id="main_cont_search">
        <div className="mcs_header">
          <p>Compare all inclusive student homes.</p>
        </div>
        <div className="mcs_content">
          <div className="mcs_box1">
          <img src={process.env.PUBLIC_URL + '/1.jpg'}
 />

            <h2>Search</h2>
            <p>Find your dream home in the perfect area near your university.</p>
          </div>
          <div className="mcs_box2">
          <img src={img2}/>
          <h2>Compare</h2>
          <p>Compare student accommodation to find the right home for you.</p>
          </div>
          <div className="mcs_box3">
          <img src={img3}/>
          <h2>Bills Included</h2>
          <p>Bills are included in all rent prices. No hidden fees.</p>
          </div>
        </div>
        <div>
          <button className="mcs_btn">Search and Compare</button>
        </div>
      </section>
      <section id="using_grid">
        <div className="using_blog1">
          <img src={vector}/><br/>
          <h3>1000s of Homes</h3>
          <p>
            With the best selection of student accommodation, find a home that’s
            right for you.
          </p>
        </div>
        <div className="using_blog2">
        <img src={malte}/>
          
          <img />
        </div>
        <div className="using_blog3">
          <img src={stroke}/><br/>
          <h3>Save Shortlists</h3>
          <p>
            Shortlist your favourite properties and send enquiries in one click.
          </p>
        </div>
        
      </section>
      <section className="book_demo">
          <p>Are you a letting agent?</p>
          <button> Book a Demo</button>
        </section>
    </div>
  );
};

export default MainContent;
