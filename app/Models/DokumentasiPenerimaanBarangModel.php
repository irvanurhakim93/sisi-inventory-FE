<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DokumentasiPenerimaanBarangModel extends Model
{
    use HasFactory;

    protected $table = 'dokumentasi_penerimaan_barang';

    protected $fillable = [
        'item_op',
        'kode_material',
        'desc_material',
        'gambar',
    ];
}
