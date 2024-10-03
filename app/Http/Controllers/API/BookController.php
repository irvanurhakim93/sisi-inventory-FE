<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

class BookController extends Controller
{
    // all books
    public function index()
    {   
        $buku = [
            [
                "id" => 1,
                "judul" => "Sang Pemimpi",
                "pengarang" => "Andrea Hirata",
                "tahun_terbit" => 2006,
                "genre" => "Fiksi",
                "penerbit" => "Bentang Pustaka"
            ],
            [
                "id" => 2,
                "judul" => "Laskar Pelangi",
                "pengarang" => "Andrea Hirata",
                "tahun_terbit" => 2005,
                "genre" => "Fiksi",
                "penerbit" => "Bentang Pustaka"
            ],
            [
                "id" => 2,
                "judul" => "1984",
                "pengarang" => "George Orwell",
                "tahun_terbit" => 1949,
                "genre" => "Dystopia",
                "penerbit" => "Secker & Warburg"
            ]
        ];
        
        $cek = [];
        
        foreach ($buku as $val) {
            // Encrypt the ID
            $cryptId = Crypt::encrypt($val['id']);
        
            // Store both the encrypted ID and book details
            $cek[] = [
                'uuid' => $cryptId,
                'book' => $val // Assuming you want to keep the whole book data
            ];
        }
        
        
        dd($cek);
        
        return array_reverse($cek);

    }

    // add book
    public function add(Request $request)
    {
        $book = new Book([
            'name' => $request->name,
            'author' => $request->author
        ]);
        $book->save();

        return response()->json('The book successfully added');
    }

    // edit book
    public function edit($id)
    {
        $book = Book::find($id);
        return response()->json($book);
    }

    // update book
    public function update($id, Request $request)
    {
        $book = Book::find($id);
        $book->update($request->all());

        return response()->json('The book successfully updated');
    }

    // delete book
    public function delete($id)
    {
        $book = Book::find($id);
        $book->delete();

        return response()->json('The book successfully deleted');
    }
}
