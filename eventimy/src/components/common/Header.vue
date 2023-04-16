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
        <div class="searchbox">
          <h3>ANYWHERE</h3>
          <span>|</span>
          <h3>ANYTYME</h3>
          <span class="search_icon_container">
            <img src="" alt="" />
          </span>
        </div>
      </div>
      <div class="users_action_block">
        <div class="create_event_action">
          <p>venter your event</p>
        </div>
        <div class="language_switcher">
          <img src="" alt="" />
        </div>
        <div class="profile_block">
          <img src="" alt="" />
          <span>
            <img src="" alt="" />
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
  background-color: rgb(147, 147, 147);
  width: 100%;
  height: 100px;
  .header_top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .search {
      .searchbox {
        display: flex;
        flex-direction: row;
      }
    }
  }
  .header_bottom {
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
      border: 1px solid red;
    }
  }
}
</style>
