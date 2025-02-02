package org.dynmap.utils;

public class RoundVisibilityLimit implements VisibilityLimit {
    public int x_center, z_center;
    public int radius; //Using squared_radius instead of radius for tiny optimization

    public RoundVisibilityLimit(int x_center, int z_center, int radius) {
        this.x_center = x_center;
        this.z_center = z_center;
        this.radius = radius;
    }

    @Override
    public boolean doIntersectChunk(int chunk_x, int chunk_z) {
        int chunk_center_x = chunk_x * 16 + 8;
        int chunk_center_z = chunk_z * 16 + 8;
        int chunk_corner_x, chunk_corner_z;
        if (chunk_center_x >= x_center)
            chunk_corner_x = chunk_x * 16;
        else
            chunk_corner_x = chunk_x * 16 + 15;

        if (chunk_center_z >= z_center)
            chunk_corner_z = chunk_z * 16;
        else
            chunk_corner_z = chunk_z * 16 + 15;

        // By gmfamily - Use long representation of the distance between tested chunk and center of tested limit
        // to avoid int overflow while computing the distance compared to limit radius using square delta value
        long chunk_delta_x = chunk_corner_x - x_center;
        long chunk_delta_z = chunk_corner_z - z_center;
        return chunk_delta_x * chunk_delta_x + chunk_delta_z * chunk_delta_z < (long) radius * radius;
    }

    @Override
    public int xCenter() {
        return x_center;
    }

    @Override
    public int zCenter() {
        return z_center;
    }

}
