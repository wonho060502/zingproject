"use client";

import MainBox from "@/components/MainBox";
import Link from "next/link";
import useCategoriesList from "./CategoriesList.hooks";

function CategoriesHomeList() {
	const { categories } = useCategoriesList();

	// 카테고리 목록에서 자유 게시판 안보이게 처리
	const noFreeCategory = categories?.filter((category) => category.id !== 0);

	return (
		<MainBox>
			<div className="mb-4 pb-4  border-b">
				<Link href={"/categories"}>
					<h1 className="font-bold text-2xl">카테고리</h1>
				</Link>
			</div>

			<ul
				id="slider"
				className="flex flex-row gap-x-8 justify-between items-center"
			>
				{noFreeCategory
					?.map((category) => (
						<li
							key={category.id}
							className="relative w-40 p-4 pb-8 rounded-2xl bg-black overflow-hidden"
						>
							<img
								src={`https://vcvunmefpfrcskztejms.supabase.co/storage/v1/object/public/category_image/${category.categoryImg}`}
								className="absolute top-0 left-0 w-full h-full opacity-45 scale-150"
							/>

							<Link
								href={`/categories/${category.id}`}
								className="grid grid-cols-1 place-items-center z-10"
							>
								<img
									src={`https://vcvunmefpfrcskztejms.supabase.co/storage/v1/object/public/category_image/${category.categoryImg}`}
									className="w-32 h-32 bg-[#fdfbfc] rounded-full opacity-90 z-10"
								/>

								<p className="font-bold text-2xl text-white text-center pt-2 z-10">
									{category.categoryName}
								</p>
							</Link>
						</li>
					))
					.slice(0, 5)}
			</ul>
		</MainBox>
	);
}

export default CategoriesHomeList;
