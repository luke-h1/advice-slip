import adviceClient from './client/Client';

export interface Advice {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const adviceService = {
  getAllAdvices: async (): Promise<Advice[]> => {
    const response = await adviceClient.get('/advices');
    return response.data;
  },
  getAdvice: async (id: number): Promise<Advice> => {
    const response = await adviceClient.get(`/advice/${id}`);
    return response.data;
  },
  createAdvice: async (advice: Advice): Promise<Advice> => {
    const response = await adviceClient.post('/advice', advice);
    return response.data;
  },
  updateAdvice: async (
    id: number,
    title: string,
    content: string,
  ): Promise<void> => {
    const response = await adviceClient.put(`/advice/${id}`, {
      id,
      title,
      content,
    });
    return response.data;
  },
  deleteAdvice: async (id: number): Promise<void> => {
    const response = await adviceClient.delete(`/advice/${id}`);
    return response.data;
  },
};

export default adviceService;
