const { NextResponse } = require("next/server");

const data = [
  {
    id: 1,
    title: "Andara TV",
    url: "https://res.cloudinary.com/dlshk9mf6/image/upload/v1718786765/AndaraTV/brpqukvj8zieye7eqjbf.jpg",
  },
  {
    id: 2,
    title: "Andara TV",
    url: "https://res.cloudinary.com/dlshk9mf6/image/upload/v1718786768/AndaraTV/opxllhq4zrytqeotvtic.jpg",
  },
  {
    id: 3,
    title: "Andara TV",
    url: "https://res.cloudinary.com/dlshk9mf6/image/upload/v1718786776/AndaraTV/xopzz8xmxl4iv5ta6gxt.jpg",
  },
  {
    id: 4,
    title: "Andara TV",
    url: "https://res.cloudinary.com/dlshk9mf6/image/upload/v1718786763/AndaraTV/ycezygxz56fu9etloysn.jpg",
  },
  {
    id: 5,
    title: "Andara TV",
    url: "https://res.cloudinary.com/dlshk9mf6/image/upload/v1718786763/AndaraTV/f0ydl2aits5nxbncaqdu.jpg",
  },
  {
    id: 6,
    title: "Andara TV",
    url: "https://res.cloudinary.com/dlshk9mf6/image/upload/v1718786757/AndaraTV/dmsbtpxvb2dxqywu8v1f.jpg",
  },
];

export async function GET(NextRequest) {
  const { searchParams } = new URL(NextRequest.url);
  const id = searchParams.get("id");
  if (id) {
    // Mencari Data Berdasarkan ID
    const detailProduct = data.find((item) => item.id === Number(id));
    // Mengecek apakah data ID ada
    if (detailProduct) {
      return NextResponse.json({
        detailProduct,
        status: 200,
        message: "success",
      });
    }
    // Jika data ID tidak ditemukan/kosong
    return NextResponse.json({
      status: 404,
      message: "Gallery not found",
      data: null,
    });
  }
  return NextResponse.json({ data, status: 200, message: "success" });
}
