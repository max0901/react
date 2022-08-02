const BlogBanner = () => {
  return (
    <section>
      {/* <!-- myInfo --> */}
      <div id="myblog_my_info">
        <div id="myblog_my_avatar">
          <label for="user_avatar">
            <img src="./img/avatar.jfif" />
          </label>
          <input type="file" id="user_avatar" />
        </div>
        <div id="myblog_my_infoList">
          <p>kimseongyong</p>
          <ul>
            <li>16</li>
            {/* <!-- myPost --> */}
            <li>321</li>
            {/* <!-- myFromFriends --> */}
            <li>248</li>
            {/* <!-- myToFriends --> */}
            <li>8</li>
            {/* <!-- myBan --> */}
          </ul>
        </div>
        <ul id="myblog_myInfo_sub">
          <li>게시글</li>
          <li>팔로잉</li>
          <li>팔로우</li>
          <li>차단</li>
        </ul>
        <div id="myblog_button_group">
          <button id="myblog_ban_btn">차단</button>
          <button>팔로잉</button>
        </div>
      </div>
      <span class="myblog_small_circle"></span>
      <span class="myblog_medium_cricle"></span>
      <hr id="myblog_colum_line" />
      <span class="myblog_small_circle"></span>
    </section>
  );
};
export default BlogBanner;
