import { Knex } from "knex";
import bcrypt from "bcrypt";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  //   await knex("table_name").del();

  // Inserts seed entries
  await knex("car_brand").insert([
    { id: "a084a9d2-0c01-4832-bfc1-39ded8b13769", name: "Toyota" },
    { id: "64588529-731f-4353-8720-17690f69996a", name: "Honda" },
    { id: "72e15674-521d-4dd1-a8ef-4e7773954e23", name: "Suzuki" },
  ]);

  await knex("role").insert([
    { id: "1", name: "SuperAdmin" },
    { id: "2", name: "Admin" },
    { id: "3", name: "Customer"}
  ])
  await knex("account").insert([
    {
      id: "1cb69048-68be-474a-bef8-bff01052615c",
      fullName: "Super Admin",
      address: "Jakarta",
      phone: "081221222",
      birthDate: new Date("2000-11-17"),
      username: "superadmin",
      email: "superadmin@email.com",
      password: await bcrypt.hash("superadmin123/", 8),
      pictureUrl: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      roleId: "1",
    },
  ]);
  await knex("car_type").insert([
    { id: "8e3386be-633a-4a5b-89e0-21a4ec7ad642", name: "Sport Utility Vehicle (SUV)" },
    { id: "00c81856-23b9-4f9c-96ef-e43db00cf099", name: "Multi Purpose Vehicle (MPV)" },
    { id: "88cddf3e-024d-4b0e-a181-5b90196364eb", name: "Sedan" },
    { id: "a36863c8-00d5-4c32-bae3-4ef8b13292d1", name: "Wagon" },
    { id: "9a626f5a-a491-47b4-afd3-d92b73432374", name: "Hatchback" },
    { id: "c1c16f3c-aff9-4b1e-b8da-0cc4401cc5b8", name: "Coupe" },
    { id: "e1ecab2b-56b4-445e-b07f-2135028ae3cd", name: "City Car" },
    { id: "c55e5705-e0ed-4880-8f2d-f6dd1c2e6a75", name: "Convertible " },
    { id: "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08", name: "Crossover" },
    { id: "ff8d8f18-9f79-4a28-8514-813f0698c805", name: "Microcar" },
    { id: "2d450a45-aa2d-4ba6-91f3-b9a88879e912", name: "Pikap" },
  ]);

  await knex("car_transmission").insert([
    { id: "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc", name: "Manual" },
    { id: "c4d51740-8250-4d71-803c-c0b7f39bfe25", name: "Automatic" },
    { id: "ec69c821-aa1a-4fbf-9b2d-da6af948bab5", name: "Transmisi Dual Clutch (DCT)" },
  ]);

  await knex("car").insert([
    {
      id: "b464e8ae-8f9c-41c2-93e7-39fbc284f88b",
      name: "Toyota Alphard",
      price: 1000000,
      year: 2023,
      size: "Large",
      capacity: 8,
      description: "Large and elegant car",
      pictureUrl: "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
      createdById: "1cb69048-68be-474a-bef8-bff01052615c",
      updatedById: "1cb69048-68be-474a-bef8-bff01052615c",
      carBrandId: "a084a9d2-0c01-4832-bfc1-39ded8b13769",
      carTypeId: "c55e5705-e0ed-4880-8f2d-f6dd1c2e6a75",
      carTransmissionId: "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
    },
    {
      id: "64588529-731f-4353-8720-17690f69996a",
      name: "Honda Brio",
      price: 250000,
      year: 2020,
      size: "Small",
      capacity: 5,
      description: "small car",
      pictureUrl: "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
      createdById: "1cb69048-68be-474a-bef8-bff01052615c",
      updatedById: "1cb69048-68be-474a-bef8-bff01052615c",
      carBrandId: "64588529-731f-4353-8720-17690f69996a",
      carTypeId: "ff8d8f18-9f79-4a28-8514-813f0698c805",
      carTransmissionId: "c4d51740-8250-4d71-803c-c0b7f39bfe25",
    },
    {
      id: "72e15674-521d-4dd1-a8ef-4e7773954e23",
      name: "Suzuki Ertiga",
      price: 350000,
      year: 2022,
      size: "Medium",
      capacity: 5,
      description: "Medium car",
      pictureUrl: "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
      createdById: "1cb69048-68be-474a-bef8-bff01052615c",
      updatedById: "1cb69048-68be-474a-bef8-bff01052615c",
      carBrandId: "72e15674-521d-4dd1-a8ef-4e7773954e23",
      carTypeId: "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
      carTransmissionId: "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
    },
  ]);
}
