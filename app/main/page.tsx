
// import { auth } from "@/auth";
// import { redirect } from "next/navigation";

export default async function MainPage() {
//   const session = await auth();

//   if (!session?.user) {
//     redirect("/login");
//   }

  return (
    <div className="p-6">
      <p className="mt-2">This is your main dashboard.</p>
    </div>
  );
}
