<template>
    
    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <ul class="timeline">
                    <li class="completed">
                        <b>Telah disetujui oleh (Manajer ybs) pada {{ timeNow }}</b>
                    </li>
                    <li>
                        <b>Menunggu Persetujuan (Senior ybs)</b>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </template>
    
    <style lang="css" scoped>
    ul.timeline {
        list-style-type: none;
        position: relative;
    }
    ul.timeline:before {
        content: ' ';
        background: #d4d9df;
        display: inline-block;
        position: absolute;
        left: 29px;
        width: 2px;
        height: 100%;
        z-index: 400;
    }
    ul.timeline > li {
        margin: 20px 0;
        padding-left: 20px;
    }
    ul.timeline > li:before {
        content: ' ';
        background: white;
        position: absolute;
        border-radius: 50%;
        background-image: url('/assets/media/logos/clock-timeline.png');
        left: 20px;
        width: 20px;
        height: 20px;
        z-index: 400;
    }
    
    ul.timeline > li.completed:before {
        background-color: #14AE5C; /* Green background */
        background-image: url('/assets/media/logos/check.png'); /* Check image */
        background-size: 70%; /* Adjust size of the check image */
        background-position: center;
        background-repeat: no-repeat; /* Center the check image */
    
    }
    
    ul.timeline > li.completed {
        color: black; /* Keep text black */
    }
    
    
    
    /* ul.timeline > li.completed {
        background-color: green;
        color: white;
        padding: 10px;
        border-radius: 5px;
        position: relative;
    } */
    
    /* ul.timeline > li.completed svg {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
    } */
    
    
    
    </style>
    
    <script>
    import moment from "moment";
    
    export default {
        name: "Dashboard",
        data() {
            return {
                name: null,
                timeNow: this.getFormattedTimeNow()
            }
        },
        created() {
            if (window.Laravel.user) {
                this.name = window.Laravel.user.name
            }
        },
        mounted(){
            this.$root.menuActive = 'Dashboard'
        },
        methods: {
            getFormattedTimeNow(){
                moment.locale('id');
                return moment().format("dddd, DD MMMM YYYY, HH:mm ");
            }
        }
        // beforeRouteEnter(to, from, next) {
        //     if (!window.Laravel.isLoggedin) {
        //         window.location.href = "/";
        //     }
        //     next();
        // }
    }
    </script>