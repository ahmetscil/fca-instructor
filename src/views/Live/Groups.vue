<template>
  <ul class="groupsList">
    <li v-for="idx in 30" :key="idx">
      <div class="dropdown">
        <p id="dLabel" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-ellipsis-v"></i> Group {{idx}}
        </p>
        <ul class="dropdown-menu shadow" aria-labelledby="dLabel">
          <a href="#" class="dropdown-item">Join to Group</a>
          <a href="#" class="dropdown-item">Send Message</a>
          <a href="#" class="dropdown-item">Private Room</a>
        </ul>
      </div>
    </li>
  </ul>
</template>
<style lang="sass">
  .groupsList
    height: 84vh
    overflow: auto
    padding: 0px
    list-style: none
    & li
      background: #00000020
      height: 40px
      margin-bottom: 5px
      border-bottom: 1px #00000050 solid
      transition: 0.3s
      &:hover
        background: #00000050
        transition: 0.3s
    .dropdown
      float: left
      & p
        color: #fff
        cursor: pointer
        font-size: 12px
        margin: 10px 0 0 10px
      .dropdown-menu
        background: rgba(0,0,0,.9)
        .dropdown-item
          color: #cacaca
          font-size: 12px
          padding: .25rem 0.5rem
          &:hover
            background: #000
            color: #fff
        .dropdown-divider
          border-top: 1px #ffc107 solid
</style>