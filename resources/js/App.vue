<template>
  <div
    v-if="isLoggedIn === true"
    id="kt_body"
    class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed aside-enabled aside-fixed"
    style="--kt-toolbar-height: 55px; --kt-toolbar-height-tablet-and-mobile: 55px; background-color: white;"
  >
    <!--begin::Root-->
    <div class="d-flex flex-column flex-root">
      <!--begin::Page-->
      <div class="page d-flex flex-row flex-column-fluid">
        <!--begin::Aside-->
        <div
          id="kt_aside"
          class="aside aside-light aside-hoverable"
          data-kt-drawer="true"
          data-kt-drawer-name="aside"
          data-kt-drawer-activate="{default: true, lg: false}"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'200px', '300px': '250px'}"
          data-kt-drawer-direction="start"
          data-kt-drawer-toggle="#kt_aside_mobile_toggle"
          style="background-color: white"
        >
          <!--begin::Brand-->
          <div class="aside-logo flex-column-auto" id="kt_aside_logo">
            <!--begin::Logo-->
            <a href="/">
              <img
                alt="Logo"
                src="assets/media/logos/sig-putih.png" 
                class="h-70px logo"
              />
            </a>
            <!--end::Logo-->
            <!--begin::Aside toggler-->
            <div
              id="kt_aside_toggle"
              class="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle"
              data-kt-toggle="true"
              data-kt-toggle-state="active"
              data-kt-toggle-target="#kt_body"
              data-kt-toggle-name="aside-minimize"
            >
              <!--begin::Svg Icon | path: icons/duotune/arrows/arr079.svg-->
              <span class="svg-icon svg-icon-1 rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity="0.5"
                    d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <!--end::Svg Icon-->
            </div>
            <!--end::Aside toggler-->
          </div>
          <!--end::Brand-->
          <!--begin::Aside menu-->
          <div class="aside-menu flex-column-fluid">
            <!--begin::Aside Menu-->
            <div
              class="hover-scroll-overlay-y my-5 my-lg-5"
              id="kt_aside_menu_wrapper"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-height="auto"
              data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
              data-kt-scroll-wrappers="#kt_aside_menu"
              data-kt-scroll-offset="0"
            >
              <!--begin::Menu-->
              <div
                class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"
                id="#kt_aside_menu"
                data-kt-menu="true"
                data-kt-menu-expand="false"
              >
                <!--Menu 2-->
                <div data-kt-menu-trigger="click" class="menu-item menu-acordion">
                  <router-link to="/profile" class="menu-link">
                        <img src="assets/media/logos/mulyono.png" style="height: 45px;" alt="" class="">
                        <span style="margin-left: 20px; color: black"><b>Farhan Mulyono</b></span>
                      </router-link>
                </div>
                <!--Separator-->
                <div class="separator border-1 border-dark my-10"></div>
                <!--Separator--->

                <div data-kt-menu-trigger="click" class="menu-item menu-acordion">
                  <router-link to="/dashboard" class="menu-link">
                        <span class="menu-title" style="color: black;">Dashboard</span>
                      </router-link>
                </div>
                <div data-kt-menu-trigger="click" class="menu-item menu-acordion">
                  <router-link to="/dokumentasi-penerimaan-barang" class="menu-link">
                        <span class="menu-title" style="color: black;">Dokumentasi Penerimaan Barang</span>
                      </router-link>
                </div>
                <div data-kt-menu-trigger="click" class="menu-item menu-acordion">
                  <router-link to="/stock-bahan-baku" class="menu-link">
                        <span class="menu-title" style="color: black;">Stock Bahan Baku</span>
                      </router-link>
                </div>
                <div data-kt-menu-trigger="click" class="menu-item menu-acordion">
                  <router-link to="/stock-opname" class="menu-link">
                        <span class="menu-title" style="color: black;">Stock Opname</span>
                      </router-link>
                </div>
                                <!--Separator-->
                                <div class="separator border-1 border-dark my-10"></div>
                <!--Separator--->


                <div data-kt-menu-trigger="click" class="menu-item menu-acordion">
                  <router-link to="/" class="menu-link">
                        <span class="menu-title" style="color: black;" @click="logout">Logout</span>
                      </router-link>
                </div>

              </div>
              <!--end::Menu-->
            </div>
            <!--end::Aside Menu-->
          </div>
          <!--end::Aside menu-->
        </div>
        <!--end::Aside-->
        <!--begin::Wrapper-->
        <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
      
          <!--begin::Header-->
          <div id="kt_header" style="background-image: url('assets/media/logos/rak-buku.png'); height: 60px;" class="header align-items-stretch">
            <!--begin::Container-->
            <div
              class="container-fluid d-flex align-items-stretch justify-content-between"
            >
              <!--begin::Aside mobile toggle-->
              <div
                class="d-flex align-items-center d-lg-none ms-n2 me-2"
                title="Show aside menu"
              >
                <div
                  class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
                  id="kt_aside_mobile_toggle"
                >
                  <!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg-->
                  <span class="svg-icon svg-icon-1">
                    <!--Menu Hamburger-->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#000000"
                    >
                      <path
                        d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                        fill="#000000"
                      />
                      <path
                        opacity="0.3"
                        d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                        fill="#000000"
                      />
                    </svg>
                  </span>
                  <!--end::Svg Icon-->
                </div>
              </div>
              <!--end::Aside mobile toggle-->
              <!--begin::Mobile logo-->
              <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                <a href="/" class="d-lg-none">

                </a>
              </div>
              <!--end::Mobile logo-->
              <!--begin::Wrapper-->
              <div
                class="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
              >
                <!--begin::Navbar-->
                <div class="d-flex align-items-stretch" id="kt_header_nav"></div>
                <!--end::Navbar-->
                <!--begin::Toolbar wrapper-->
                <div class="d-flex align-items-stretch flex-shrink-0">
                  <!--begin::User menu-->
                  <div
                    class="d-flex align-items-center ms-1 ms-lg-3"
                    id="kt_header_user_menu_toggle"
                  > 
                  <img src="/assets/media/logos/login-logo.png" style="height: 30px; align-self: center; margin-right: 80px;" alt="">
                    <div class="m-5">

                    </div>
                    <!--begin::Menu wrapper-->
                    <a href="/notification">
                    <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" id="notification-bell" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path id="secondary" d="M15,17H9a1,1,0,0,0-1,1,4,4,0,0,0,8,0A1,1,0,0,0,15,17Z" style="fill: rgb(44, 169, 188);"></path><path id="primary" d="M20.09,13.67,19,12.59V9A7,7,0,0,0,5,9v3.59L3.91,13.67A3.13,3.13,0,0,0,6.12,19H17.88a3.13,3.13,0,0,0,2.21-5.33Z" style="fill: rgb(0, 0, 0);"></path></svg>
                    <div
                      class="cursor-pointer symbol symbol-30px symbol-md-40px"
                      data-kt-menu-trigger="click"
                      data-kt-menu-attach="parent"
                      data-kt-menu-placement="bottom-end"
                    >
                    </div>
                  </a>

                    <!--begin::User account menu-->
                    <!--end::User account menu-->
                    <!--end::Menu wrapper-->
                  </div>
                  <!--end::User menu-->
                  <!--begin::Header menu toggle-->
                  <div
                    class="d-flex align-items-center d-lg-none ms-2 me-n3"
                    title="Show header menu"
                  >
                    <div
                      class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
                      id="kt_header_menu_mobile_toggle"
                    >
                      <!--begin::Svg Icon | path: icons/duotune/text/txt001.svg-->
                      <span class="svg-icon svg-icon-1">

                      </span>
                      <!--end::Svg Icon-->
                    </div>
                  </div>
                  <!--end::Header menu toggle-->
                </div>
                <!--end::Toolbar wrapper-->
              </div>
              <!--end::Wrapper-->
            </div>
            <!--end::Container-->
          </div>
          <!--end::Header-->
          <!--begin::Content-->
          <div class="content d-flex flex-column flex-column-fluid p-10" id="kt_content">
            <router-view />
          </div>
          <!--end::Content-->
          <!--begin::Footer-->
          <div class="footer py-4 d-flex flex-lg-column" id="kt_footer">
            <!--begin::Container-->
            <div
              class="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between"
            >
              <!--begin::Copyright-->
              <div class="text-dark order-2 order-md-1">
                <span class="text-muted fw-bold me-1"></span>
                
              </div>
              <!--end::Copyright-->
              <!--begin::Menu-->
              <ul class="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                <li class="menu-item">
                </li>
                <li class="menu-item">

                </li>
              </ul>
              <!--end::Menu-->
            </div>
            <!--end::Container-->
          </div>
          <!--end::Footer-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Page-->
    </div>
    <!--end::Root-->
    <!--begin::Scrolltop-->
    <div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
      <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
      <span class="svg-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            opacity="0.5"
            x="13"
            y="6"
            width="13"
            height="2"
            rx="1"
            transform="rotate(90 13 6)"
            fill="currentColor"
          />
          <path
            d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <!--end::Svg Icon-->
    </div>
    <!--end::Scrolltop-->
  </div>
  <div v-else id="kt_body" class="bg-body p-30">
    <PLogin></PLogin>
  </div>
</template>

<script>
import PLogin from "./pages/Login.vue";
import moment from "moment";
// const date = new Date();
export default {
  name: "App",
  components: {
    PLogin,
  },
  data() {
    return {
      login: [],
      isLoggedIn: false,
      active_el: 0,
      dateTime: {
        hours: "",
        minutes: "",
        seconds: "",
      },
      menuActive: "",
      timeNow: moment().format("DD MMM YYYY, HH:mm"),
    };
  },
  created() {
    if (window.Laravel.isLoggedin) {
      (this.isLoggedIn = true), (this.login = window.Laravel.user);
    }
    setInterval(
      function () {
        this.timeNow = moment().format("DD MMM YYYY, HH:mm");
      }.bind(this),
      1000
    );
  },
  mounted() {},

  methods: {
    getLogoPhoto() {
      return "/img/logo.png";
    },
    getProfilePhoto() {
      return "/img/logo.png";
    },
    getLoginBg() {
      return "/img/login-bg.jpg";
    },
    activate: function (el) {
      this.active_el = el;
    },
    setDateTime() {
      const date = new Date();
      const weekday = new Array(
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
      );
      const months = new Array(
        "Januari",
        "Febuari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Augustus",
        "September",
        "Ocktober",
        "November",
        "Desember"
      );
      this.dateTime = {
        dayOfWeek: weekday[date.getDay()],
        dayOfMonth: date.getDate(),
        curMonth: months[date.getMonth()],
        curyear: date.getFullYear(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      };
    },
    setMenuActive(menu) {
      this.menuActive = menu;
      console.log(menu);
    },
    logout() {
      this.$axios.get("/sanctum/csrf-cookie").then((response) => {
        this.$axios
          .post("/api/logout")
          .then((response) => {
            console.log(response.data);
            if (response.data.success) {
              window.location.href = "/login";
            } else {
              this.error = response.data.message;
            }
          })
          .catch(function (error) {
            console.error(error);
          });
      });
    },
  },
  beforeMount() {
    this.timer = setInterval(this.setDateTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>
