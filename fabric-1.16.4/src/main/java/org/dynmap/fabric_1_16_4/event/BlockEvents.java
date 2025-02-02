package org.dynmap.fabric_1_16_4.event;

import net.fabricmc.fabric.api.event.Event;
import net.fabricmc.fabric.api.event.EventFactory;
import net.minecraft.util.math.BlockPos;
import net.minecraft.world.World;

import net.minecraft.server.world.ServerWorld;
import net.minecraft.util.math.BlockPos;
import net.minecraft.block.Material;
import net.minecraft.server.network.ServerPlayerEntity;

public class BlockEvents {
    private BlockEvents() {
    }

    public static Event<BlockCallback> EVENT = EventFactory.createArrayBacked(BlockCallback.class,
            (listeners) -> (world, pos) -> {
                for (BlockCallback callback : listeners) {
                    callback.onBlockEvent(world, pos);
                }
            }
    );

    public static Event<SignChangeCallback> SIGN_CHANGE_EVENT = EventFactory.createArrayBacked(SignChangeCallback.class,
            (listeners) -> (world, pos, lines, material, player) -> {
                for (SignChangeCallback callback : listeners) {
                    callback.onSignChange(world, pos, lines, material, player);
                }
            }
    );

    public interface BlockCallback {
        void onBlockEvent(World world, BlockPos pos);
    }

    public interface SignChangeCallback {
        void onSignChange(ServerWorld world, BlockPos pos, String[] lines, Material material, ServerPlayerEntity player);
    }
}
