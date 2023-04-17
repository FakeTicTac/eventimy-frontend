<template>
  <div class="header_container">
    <div class="header_top">
      <div class="logo">
        <img
          src="@/assets/images/components/common/header/website-logo.svg"
          alt="Venter logo"
        />
      </div>
      <div class="search">
        <div class="place_time_searchbox">
          <h3>Anywhere</h3>
          <span>|</span>
          <h3>Anytime</h3>
          <span class="search_icon_container">
            <img class="search_icon" src="@/assets/images/components/common/header/search_icon.svg" alt="" />
          </span>
        </div>
      </div>
      <div class="users_action_block">
        <div class="create_event_action">
          <p>venter your event</p>
        </div>
        <div class="language_switcher">
          <img src="@/assets/images/components/common/header/language_icon.svg" alt="" />
        </div>
        <div class="profile_block">
          <img src="@/assets/images/components/common/header/users_properties.svg" alt="" />
          <span class="users_icon_container">
            <img src="@/assets/images/components/common/header/user_icon.svg" alt="" />
          </span>
        </div>
      </div>
    </div>
    <div class="header_bottom">
      <ul class="header_navigation">
        <li>home</li>
        <li>performers</li>
        <li>music</li>
        <li>visual arts</li>
        <li>food & drink</li>
        <li>business</li>
        <li>sport</li>
      </ul>
      <div class="filter">
        <img src="" alt="" />
        <p>filters</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.header_container {
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100px;
  .header_top {
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
    margin-left: 20px;
    margin-right: 10px;
    .search {

      height: 30px;
      width: 300px;
      border: 2px solid rgb(0, 0, 0);
      border-radius: 20px;
      .place_time_searchbox {
        display: flex;
        flex-direction: row;
        .search_icon_container{
          display: block;
          background-color: rgba(248, 170, 0, 1) ;
          height: 30px;
          width: 30px;
          border-radius: 25px;
          .search_icon{
            display:flex;
            max-width: 30px;  
            height: 30px;  
          }
        }
      }
    }
    .users_action_block{
      display: flex;
      flex-direction: row;
      .header_navigation{
        list-style-type: none;
        margin: 0px;
        padding: 0px;
      }
      .profile_block{
        border: 2px solid black;
        border-radius: 20px;
        height: 30px;
        width: 60px;
        .users_icon_container{
          display: block;
          background-color: grey;
          height: 30px;
          width: 30px;
          border-radius: 25px;
        }
      }
    }
  }
  .header_bottom {
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .header_navigation {
      display: flex;
      flex-direction: row;
    }
    .filter {
      display: flex;
      flex-direction: row;
      border: 2px solid rgb(0, 0, 0);
      border-radius: 20px;
    }
  }
}
</style>
