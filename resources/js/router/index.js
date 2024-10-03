import { createWebHistory, createRouter } from "vue-router";

import Home from '../pages/Home';
import About from '../pages/About';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import DataBuku from '../pages/DataBuku';
import DokumentasiPenerimaanBarang from "../pages/Dokumentasi-Penerimaan-Barang/Dokumentasi-Penerimaan-Barang.vue";
import Books from '../pages/Books/Books';
import Category from '../pages/Category/Category';
import StockBahanBaku from "../pages/Stock-Bahan-Baku.vue";
import InputDokumentasi from "../pages/Dokumentasi-Penerimaan-Barang/Input-Dokumentasi.vue";
import InputDokumentasiGallery from "../pages/Dokumentasi-Penerimaan-Barang/Open-Gallery-OP.vue";
import OpenGalleryMaterial from "../pages/Dokumentasi-Penerimaan-Barang/Open-Gallery-Material.vue";
import EditFotoDokumentasi from "../pages/Dokumentasi-Penerimaan-Barang/EditFotoMaterialDokumentasi.vue";
import ViewPhotoOp from "../pages/Dokumentasi-Penerimaan-Barang/ViewPhotoOp.vue";
import InputDokumentasiAfter from "../pages/Dokumentasi-Penerimaan-Barang/Input-Dokumentasi-After.vue";
import Notification from "../pages/Notification.vue";
import CameraLayoutMaterial from "../pages/Dokumentasi-Penerimaan-Barang/Camera-Layout-Material.vue";
import CameraLayoutOP from "../pages/Dokumentasi-Penerimaan-Barang/Camera-Layout-OP.vue";
import StockOpnameIndex from "../pages/Stock-Opname/Stock-Opname-Index.vue";
import ScanBarcode from "../pages/Stock-Opname/Scan-Barcode.vue";
import SubmitReviewStockOpname from "../pages/Stock-Opname/Submit-Review-Stock-Opname.vue";
import ReviewStockOpnameIndex from "../pages/Stock-Opname/Review-Stock-Opname-Index.vue";
import EditReviewStockOpname from "../pages/Stock-Opname/Edit-Review-Stock-Opname.vue";
import CekStockIndex from "../pages/Cek-Stock/Cek-Stock-Index.vue";
import ReviewCekStock from "../pages/Cek-Stock/Review-Cek-Stock.vue";
import ReportStockIndex from "../pages/Report-Stock-Opname/Report-Stock-Index.vue";
import ApprovalIndex from "../pages/Approval/Approval-Index.vue";
import MyRequest from "../pages/Approval/My-Request.vue";
import MyRequestItemInfo from "../pages/Approval/My-Request-Item-Info.vue";
import BucketApproval from "../pages/Approval/BucketApproval.vue";
import ApprovalBeritaAcara from "../pages/Approval/Approval-Berita-Acara.vue";
import ListBeritaAcaraDisetujui from "../pages/Approval/List-Berita-Acara-Disetujui.vue";



export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'about',
        path: '/about',
        component: About
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        meta: {title: 'Login'}
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: Dashboard,
        meta: {title: 'Beranda'}
    },
    {
        name: 'Stock Bahan Baku Utama',
        path: '/stock-bahan-baku',
        component: StockBahanBaku,
        meta: {title: 'Stock Bahan Baku'}
    },
    {
        name: 'databuku',
        path: '/databuku',
        component: DataBuku
    },
    {
        name: 'books',
        path: '/books/',
        component: Books
    },
    {
        name: 'category',
        path: '/category',
        component: Category
    },

    {
        name: 'Dokumentasi-Penerimaan-Barang',
        path: '/dokumentasi-penerimaan-barang',
        component: DokumentasiPenerimaanBarang,  
        meta: {title: 'Dokumentasi Penerimaan Barang'}
    },
    {
        name: 'Input-Dokumentasi',
        path: '/dokumentasi-penerimaan-barang/input',
        component: InputDokumentasi,
        meta: {title: 'View Data Dokumentasi Penerimaan Barang'}
    },
    {
        name: 'Input Dokumentasi Gallery',
        path: '/dokumentasi-penerimaan-barang/input/op/pilih-foto/',
        component: InputDokumentasiGallery,
        meta: {title: 'Input Dokumentasi OP'}
    },
    {
        name: 'Edit Foto Dokumentasi',
        path: '/dokumentasi-penerimaan-barang/material/edit-dokumentasi',
        component: EditFotoDokumentasi,
        meta: {title: 'Edit Dokumentasi Material'}
    },
    {

    },
    {
        name: 'Edit foto Material',
        path: '/dokumentasi-penerimaan-barang/material/pilih-foto',
        component: OpenGalleryMaterial,
        meta: {title: 'Edit Dokumentasi Material'}

    },
    
    {
        name: 'Open Camera Material',
        path: '/dokumentasi-penerimaan-barang/input/open-camera-material',
        component: CameraLayoutMaterial,
        meta: {title: 'Open Camera Material'}
    },

    {
        name: 'Open Camera OP',
        path: '/dokumentasi-penerimaan-barang/input/open-camera-op',
        component: CameraLayoutOP,
        meta: { title: 'Open Camera OP'}
    },

    {
        name: 'Input Dokumentasi After',
        path: '/dokumentasi-penerimaan-barang/view-data',
        component: InputDokumentasiAfter,
        meta: {title: 'View Data Dokumentasi'}
    },
    {
        name: 'View Data Op',
        path: '/dokumentasi-penerimaan-barang/view-data/view-op',
        component: ViewPhotoOp,
        meta: {title: 'View Photo OP'}

    },

    {
        name: 'Notification',
        path: '/notification',
        component: Notification,
        meta: {title: 'Notifikasi'}
    },
    {
        name: 'Stock Opname',
        path: '/stock-opname',
        component: StockOpnameIndex,
        meta: {title: 'Stock Opname'}
        
    },
    {
        name: 'Scan Barcode',
        path: '/stock-opname/scan-barcode',
        component: ScanBarcode,
        meta: {title: 'Scan Barcode'}
    },
    {
        name: 'Submit Review Stock Opname',
        path: '/stock-opname/scan-barcode/review-submit',
        component: SubmitReviewStockOpname,
        meta: {title: 'Submit Scan Barcode Stock Opname'}
    },
    {
        name: 'Review Stock Opname Index',
        path: '/stock-opname/review-stock-opname',
        component: ReviewStockOpnameIndex,
        meta: {title: 'Revie Stock Opname Index'}
    },
    {
        name: 'Edit Review Stock Opname',
        path: '/stock-opname/review-stock-opname/edit',
        component: EditReviewStockOpname,
        meta: {title: 'Edit Stock Opname'}
    },
    {
        name: 'Cek Stock',
        path: '/cek-stock',
        component: CekStockIndex,
        meta: {title: 'Cek Stock'}
    },
    {
        name: 'Input Cek Stock',
        path: '/cek-stock/review',
        component: ReviewCekStock,
        meta: {title: 'Review Cek Stock'}
    },
    {
        name: 'Report Stock',
        path: '/report-stock',
        component: ReportStockIndex,
        meta: {title: 'Report Stock'}
        
    },
    {
        name: 'Approval',
        path: '/approval',
        component: ApprovalIndex,
        meta: {title: 'Approval'}
    },
    {
        name: 'My Request',
        path: '/approval/my-request',
        component: MyRequest,
        meta: {title: 'My Request'}
    },
    {
        name: 'My Request Info Item',
        path: '/approval/my-request/details',
        component: MyRequestItemInfo,
        meta: {title: 'My Request Info Detail'}
    },
    {
        name:'Bucket Approval',
        path: '/approval/bucket-approval',
        component: BucketApproval,
        meta: {title: 'Bucket Approval'}
    },
    {
        name: 'Approval Berita Acara',
        path: '/approval/bucket-approval/approval-berita-acara',
        component: ApprovalBeritaAcara,
        meta: {title: 'Approval Berita Acara'}
    },
    {
        name: 'List Berita Acara Disetujui',
        path: '/approval/bucket-approval/approval-berita-acara/approval-berita-disetujui',
        component: ListBeritaAcaraDisetujui,
        meta: {title: 'List Berita Acara Disetujui'}
    }





];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
