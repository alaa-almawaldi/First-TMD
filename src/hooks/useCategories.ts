import APIClient from "../services/api-client";
import { useQuery } from '@tanstack/react-query';


const apiClient = new APIClient<Category[]>('/admin/get_all_category');

export interface Category {
    id: string;
    name: string;
  }

export const useCategories = () =>useQuery({
    queryKey: ['category'],
    queryFn: apiClient.getAll,

})

export default useCategories;