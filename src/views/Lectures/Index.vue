<template>
<div>

  <div :class="themeClasses.dataListClass">
    <div class="col-12">
      <div class="dataList row p-2 mt-3">
        <div class="miniLoader" id="universitiesLoader" style="display: none"></div>
        <div class="col-sm-8 col-md-9 col-lg-9 pl-0">
          <h3>course_name</h3>
          <div class="dataSearch">
            <!-- <input type="text" class="form-control" v-model="search" placeholder="Search"> -->
          </div>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-3 pr-0 text-center">
          <button type="button" class="float-right btn btn-warning btn-sm"><i class="far fa-plus-square"></i> NEW LECTURE</button>
          <button type="button" class="float-right mr-1 btn btn-success btn-sm"><i class="far fa-plus-square"></i> LIST ALL</button>
        </div>
        <!-- <div class="dataBox col-lg-3 col-md-4 col-sm-6 col-xs-12" v-for="univ in filteredList" :key="courseersity_ID"> -->
        <div class="dataBox col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div class="dataImg">
            <div class="operations">
              <i class="fas fa-ellipsis-v" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><i class="fas fa-pencil-alt"></i> Update</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" type="button"><i class="fas fa-trash-alt"></i> Delete</button>
              </div>
            </div>
            <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
              <img :src="course_logo">
            </router-link> -->
            <a>
              <img src="course_logo">
            </a>
          </div>
          <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
            <h5 class="text-center">{{lecture Name</h5>
          </router-link> -->
          <a>
            <h5 class="text-center">lecture Name</h5>
          </a>
        </div>
        <div class="dataBox col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div class="dataImg">
            <div class="operations">
              <i class="fas fa-ellipsis-v" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><i class="fas fa-pencil-alt"></i> Update</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" type="button"><i class="fas fa-trash-alt"></i> Delete</button>
              </div>
            </div>
            <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
              <img :src="course_logo">
            </router-link> -->
            <a>
              <img src="course_logo">
            </a>
          </div>
          <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
            <h5 class="text-center">{{lecture Name</h5>
          </router-link> -->
          <a>
            <h5 class="text-center">lecture Name</h5>
          </a>
        </div>
        <div class="dataBox col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div class="dataImg">
            <div class="operations">
              <i class="fas fa-ellipsis-v" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><i class="fas fa-pencil-alt"></i> Update</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" type="button"><i class="fas fa-trash-alt"></i> Delete</button>
              </div>
            </div>
            <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
              <img :src="course_logo">
            </router-link> -->
            <a>
              <img src="course_logo">
            </a>
          </div>
          <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
            <h5 class="text-center">{{lecture Name</h5>
          </router-link> -->
          <a>
            <h5 class="text-center">lecture Name</h5>
          </a>
        </div>
        <div class="dataBox col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div class="dataImg">
            <div class="operations">
              <i class="fas fa-ellipsis-v" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><i class="fas fa-pencil-alt"></i> Update</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" type="button"><i class="fas fa-trash-alt"></i> Delete</button>
              </div>
            </div>
            <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
              <img :src="course_logo">
            </router-link> -->
            <a>
              <img src="course_logo">
            </a>
          </div>
          <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
            <h5 class="text-center">{{lecture Name</h5>
          </router-link> -->
          <a>
            <h5 class="text-center">lecture Name</h5>
          </a>
        </div>
        <div class="dataBox col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div class="dataImg">
            <div class="operations">
              <i class="fas fa-ellipsis-v" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><i class="fas fa-pencil-alt"></i> Update</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" type="button"><i class="fas fa-trash-alt"></i> Delete</button>
              </div>
            </div>
            <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
              <img :src="course_logo">
            </router-link> -->
            <a>
              <img src="course_logo">
            </a>
          </div>
          <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
            <h5 class="text-center">{{lecture Name</h5>
          </router-link> -->
          <a>
            <h5 class="text-center">lecture Name</h5>
          </a>
        </div>
        <div class="dataBox col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div class="dataImg">
            <div class="operations">
              <i class="fas fa-ellipsis-v" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><i class="fas fa-pencil-alt"></i> Update</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" type="button"><i class="fas fa-trash-alt"></i> Delete</button>
              </div>
            </div>
            <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
              <img :src="course_logo">
            </router-link> -->
            <a>
              <img src="course_logo">
            </a>
          </div>
          <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
            <h5 class="text-center">{{lecture Name</h5>
          </router-link> -->
          <a>
            <h5 class="text-center">lecture Name</h5>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div :class="themeClasses.dataListClass">
    <div class="col-12">
      <div class="dataList row p-2 mt-3">
        <div class="miniLoader" id="universitiesLoader" style="display: none"></div>
        <div class="col-sm-8 col-md-9 col-lg-9 pl-0">
          <h3>course_name</h3>
          <div class="dataSearch">
            <!-- <input type="text" class="form-control" v-model="search" placeholder="Search"> -->
          </div>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-3 pr-0 text-center">
          <button type="button" class="float-right btn btn-warning btn-sm"><i class="far fa-plus-square"></i> NEW LECTURE</button>
          <button type="button" class="float-right mr-1 btn btn-success btn-sm"><i class="far fa-plus-square"></i> LIST ALL</button>
        </div>
        <!-- <div class="dataBox col-lg-3 col-md-4 col-sm-6 col-xs-12" v-for="univ in filteredList" :key="courseersity_ID"> -->
        <div class="dataBox col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div class="dataImg">
            <div class="operations">
              <i class="fas fa-ellipsis-v" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><i class="fas fa-pencil-alt"></i> Update</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" type="button"><i class="fas fa-trash-alt"></i> Delete</button>
              </div>
            </div>
            <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
              <img :src="course_logo">
            </router-link> -->
            <a>
              <img src="course_logo">
            </a>
          </div>
          <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
            <h5 class="text-center">{{lecture Name</h5>
          </router-link> -->
          <a>
            <h5 class="text-center">lecture Name</h5>
          </a>
        </div>
        <div class="dataBox col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div class="dataImg">
            <div class="operations">
              <i class="fas fa-ellipsis-v" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><i class="fas fa-pencil-alt"></i> Update</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" type="button"><i class="fas fa-trash-alt"></i> Delete</button>
              </div>
            </div>
            <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
              <img :src="course_logo">
            </router-link> -->
            <a>
              <img src="course_logo">
            </a>
          </div>
          <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
            <h5 class="text-center">{{lecture Name</h5>
          </router-link> -->
          <a>
            <h5 class="text-center">lecture Name</h5>
          </a>
        </div>
        <div class="dataBox col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div class="dataImg">
            <div class="operations">
              <i class="fas fa-ellipsis-v" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><i class="fas fa-pencil-alt"></i> Update</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" type="button"><i class="fas fa-trash-alt"></i> Delete</button>
              </div>
            </div>
            <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
              <img :src="course_logo">
            </router-link> -->
            <a>
              <img src="course_logo">
            </a>
          </div>
          <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
            <h5 class="text-center">{{lecture Name</h5>
          </router-link> -->
          <a>
            <h5 class="text-center">lecture Name</h5>
          </a>
        </div>
        <div class="dataBox col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div class="dataImg">
            <div class="operations">
              <i class="fas fa-ellipsis-v" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><i class="fas fa-pencil-alt"></i> Update</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" type="button"><i class="fas fa-trash-alt"></i> Delete</button>
              </div>
            </div>
            <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
              <img :src="course_logo">
            </router-link> -->
            <a>
              <img src="course_logo">
            </a>
          </div>
          <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
            <h5 class="text-center">{{lecture Name</h5>
          </router-link> -->
          <a>
            <h5 class="text-center">lecture Name</h5>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div :class="themeClasses.dataListClass">
    <div class="col-12">
      <div class="dataList row p-2 mt-3">
        <div class="miniLoader" id="universitiesLoader" style="display: none"></div>
        <div class="col-sm-8 col-md-9 col-lg-9 pl-0">
          <h3>course_name</h3>
          <div class="dataSearch">
            <!-- <input type="text" class="form-control" v-model="search" placeholder="Search"> -->
          </div>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-3 pr-0 text-center">
          <button type="button" class="float-right btn btn-warning btn-sm"><i class="far fa-plus-square"></i> NEW LECTURE</button>
          <button type="button" class="float-right mr-1 btn btn-success btn-sm"><i class="far fa-plus-square"></i> LIST ALL</button>
        </div>
        <!-- <div class="dataBox col-lg-3 col-md-4 col-sm-6 col-xs-12" v-for="univ in filteredList" :key="courseersity_ID"> -->
        <div class="dataBox col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div class="dataImg">
            <div class="operations">
              <i class="fas fa-ellipsis-v" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><i class="fas fa-pencil-alt"></i> Update</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" type="button"><i class="fas fa-trash-alt"></i> Delete</button>
              </div>
            </div>
            <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
              <img :src="course_logo">
            </router-link> -->
            <a>
              <img src="course_logo">
            </a>
          </div>
          <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
            <h5 class="text-center">{{lecture Name</h5>
          </router-link> -->
          <a>
            <h5 class="text-center">lecture Name</h5>
          </a>
        </div>
        <div class="dataBox col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div class="dataImg">
            <div class="operations">
              <i class="fas fa-ellipsis-v" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><i class="fas fa-pencil-alt"></i> Update</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" type="button"><i class="fas fa-trash-alt"></i> Delete</button>
              </div>
            </div>
            <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
              <img :src="course_logo">
            </router-link> -->
            <a>
              <img src="course_logo">
            </a>
          </div>
          <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
            <h5 class="text-center">{{lecture Name</h5>
          </router-link> -->
          <a>
            <h5 class="text-center">lecture Name</h5>
          </a>
        </div>
        <div class="dataBox col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div class="dataImg">
            <div class="operations">
              <i class="fas fa-ellipsis-v" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><i class="fas fa-pencil-alt"></i> Update</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" type="button"><i class="fas fa-trash-alt"></i> Delete</button>
              </div>
            </div>
            <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
              <img :src="course_logo">
            </router-link> -->
            <a>
              <img src="course_logo">
            </a>
          </div>
          <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
            <h5 class="text-center">{{lecture Name</h5>
          </router-link> -->
          <a>
            <h5 class="text-center">lecture Name</h5>
          </a>
        </div>
        <div class="dataBox col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div class="dataImg">
            <div class="operations">
              <i class="fas fa-ellipsis-v" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><i class="fas fa-pencil-alt"></i> Update</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" type="button"><i class="fas fa-trash-alt"></i> Delete</button>
              </div>
            </div>
            <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
              <img :src="course_logo">
            </router-link> -->
            <a>
              <img src="course_logo">
            </a>
          </div>
          <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
            <h5 class="text-center">{{lecture Name</h5>
          </router-link> -->
          <a>
            <h5 class="text-center">lecture Name</h5>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div :class="themeClasses.dataListClass">
    <div class="col-12">
      <div class="dataList row p-2 mt-3">
        <div class="miniLoader" id="universitiesLoader" style="display: none"></div>
        <div class="col-sm-8 col-md-9 col-lg-9 pl-0">
          <h3>course_name</h3>
          <div class="dataSearch">
            <!-- <input type="text" class="form-control" v-model="search" placeholder="Search"> -->
          </div>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-3 pr-0 text-center">
          <button type="button" class="float-right btn btn-warning btn-sm"><i class="far fa-plus-square"></i> NEW LECTURE</button>
          <button type="button" class="float-right mr-1 btn btn-success btn-sm"><i class="far fa-plus-square"></i> LIST ALL</button>
        </div>
        <!-- <div class="dataBox col-lg-3 col-md-4 col-sm-6 col-xs-12" v-for="univ in filteredList" :key="courseersity_ID"> -->
        <div class="dataBox col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div class="dataImg">
            <div class="operations">
              <i class="fas fa-ellipsis-v" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><i class="fas fa-pencil-alt"></i> Update</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" type="button"><i class="fas fa-trash-alt"></i> Delete</button>
              </div>
            </div>
            <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
              <img :src="course_logo">
            </router-link> -->
            <a>
              <img src="course_logo">
            </a>
          </div>
          <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
            <h5 class="text-center">{{lecture Name</h5>
          </router-link> -->
          <a>
            <h5 class="text-center">lecture Name</h5>
          </a>
        </div>
        <div class="dataBox col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div class="dataImg">
            <div class="operations">
              <i class="fas fa-ellipsis-v" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><i class="fas fa-pencil-alt"></i> Update</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" type="button"><i class="fas fa-trash-alt"></i> Delete</button>
              </div>
            </div>
            <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
              <img :src="course_logo">
            </router-link> -->
            <a>
              <img src="course_logo">
            </a>
          </div>
          <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
            <h5 class="text-center">{{lecture Name</h5>
          </router-link> -->
          <a>
            <h5 class="text-center">lecture Name</h5>
          </a>
        </div>
        <div class="dataBox col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div class="dataImg">
            <div class="operations">
              <i class="fas fa-ellipsis-v" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><i class="fas fa-pencil-alt"></i> Update</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" type="button"><i class="fas fa-trash-alt"></i> Delete</button>
              </div>
            </div>
            <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
              <img :src="course_logo">
            </router-link> -->
            <a>
              <img src="course_logo">
            </a>
          </div>
          <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
            <h5 class="text-center">{{lecture Name</h5>
          </router-link> -->
          <a>
            <h5 class="text-center">lecture Name</h5>
          </a>
        </div>
        <div class="dataBox col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div class="dataImg">
            <div class="operations">
              <i class="fas fa-ellipsis-v" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button"><i class="fas fa-pencil-alt"></i> Update</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" type="button"><i class="fas fa-trash-alt"></i> Delete</button>
              </div>
            </div>
            <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
              <img :src="course_logo">
            </router-link> -->
            <a>
              <img src="course_logo">
            </a>
          </div>
          <!-- <router-link :to="{name: 'ShowUniversity', params: {univ: course_ID}}" @click.native="setBreadcrumb(course_ID,course_Name)">
            <h5 class="text-center">{{lecture Name</h5>
          </router-link> -->
          <a>
            <h5 class="text-center">lecture Name</h5>
          </a>
        </div>
      </div>
    </div>
  </div>


</div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    data: () => ({
      search: '',
      updateID: null
    }),
    mounted() {
    },
    computed: {
      ...mapState(['apiLink','allUnivs','themeClasses']),
    },
    methods: {
    }
  }
</script>
