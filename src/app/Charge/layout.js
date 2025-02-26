import React from 'react';
import { createClient } from "@supabase/supabase-js";
import Delete from './delete';

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

const Charge = async ({ children }) => {
    let { data, error } = await supabase
        .from('charge')
        .select('*');

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">💰 돈 거래는 확실히 합시다</h1>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="p-3 text-left">청구자</th>
                            <th className="p-3 text-left">제목</th>
                            <th className="p-3 text-left">피청구인</th>
                            <th className="p-3 text-left">가격</th>
                            <th className="p-3 text-left">게시날짜</th>
                            <th className="p-3 text-left">삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="border-b hover:bg-gray-100">
                                <td className="p-3">{item.charger}</td>
                                <td className="p-3">{item.title}</td>
                                <td className="p-3">{item.chargee}</td>
                                <td className="p-3 text-red-500 font-bold">₩{item.price.toLocaleString()}</td>
                                <td className="p-3 text-gray-600">{new Date(item.created_at).toLocaleDateString()}</td>
                                <td className="p-3 text-center">
                                    <Delete item={item} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {children}
        </div>
    );
};

export default Charge;